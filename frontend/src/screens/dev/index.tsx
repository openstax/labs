import { React, useEffect, useNavigate, useState } from '@common'
import { capitalize, useCurrentUser, useFetchEnvironment } from '@lib'
import { AvailableUsers } from './users'
import { LinkButton } from '@components'
import { loginAsUser } from '@models';
import { Container, Stack } from '@mantine/core';

interface UserCardProps {
    users: AvailableUsers
    type: 'admins' | 'researchers' | 'users'
    becomeUser: (ev: React.MouseEvent<HTMLAnchorElement>) => void
}

const UserCard:React.FC<UserCardProps> = ({ users, type, becomeUser }) => {

    if (!users[type]?.length) return null
    return (
        <div className="col-6">
            <div className="card">
                <h5 className="card-header">{capitalize(type)}</h5>
                <div className="list-group list-group-flush">
                    {users[type].map(u => (
                        <a
                            key={u.id}
                            href='#'
                            data-user-id={u.id}
                            onClick={becomeUser}
                            className="list-group-item"
                        >
                            <b>{u.name}</b> ({u.id})
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Dev() {
    const [users, setUsers] = useState<AvailableUsers>(new AvailableUsers())

    const { refetch: refetchEnvironment } = useFetchEnvironment()
    const nav = useNavigate()
    useEffect(() => {
        AvailableUsers.fetch().then(setUsers)
    }, [])

    const becomeUser = async (ev: React.MouseEvent<HTMLAnchorElement>) => {
        const userId = ev.currentTarget.dataset.userId
        ev.preventDefault()
        if (userId) {
            await loginAsUser(userId)
            await refetchEnvironment()
            nav('/studies')
        }
    }

    return (
        <div className="dev-console">
            <LoggedInUser />
            <Container mt='xl'>
                <div className="row">
                    <UserCard users={users} type="admins" becomeUser={becomeUser} />
                    <UserCard users={users} type="researchers" becomeUser={becomeUser} />
                    <UserCard users={users} type="users" becomeUser={becomeUser} />
                </div>
            </Container>
        </div>
    )
}

const LoggedInUser = () => {
    const currentUser = useCurrentUser()

    if (!currentUser.userId) return null
    return (
        <Stack>
            <nav className="navbar fixed-top navbar-light py-1 bg-light">
                <Container>
                    <LinkButton secondary to="/">
                        Home
                    </LinkButton>
                </Container>
            </nav>
            <h3>Logged in as: {currentUser.userId}</h3>
        </Stack>
    )
}
