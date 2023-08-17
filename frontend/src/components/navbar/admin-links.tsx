import { useCurrentUser } from '@lib';
import { Menu } from '@mantine/core';
import { React } from '@common';
import { StyledLink } from '@components';

export default function AdminLinks() {
    const user = useCurrentUser()
    if (!user.isAdministrator) return null

    return (
        <>
            <Menu.Label>Admin</Menu.Label>
            <StyledLink to="/admin/banners">
                <Menu.Item>
                    Banners
                </Menu.Item>
            </StyledLink>
            <StyledLink to="/admin/rewards">
                <Menu.Item>
                    Rewards
                </Menu.Item>
            </StyledLink>
            <StyledLink to="/admin/approve-studies">
                <Menu.Item>
                    Approve Studies
                </Menu.Item>
            </StyledLink>
            <StyledLink to="/admin/workspaces">
                <Menu.Item>
                    Manage workspaces
                </Menu.Item>
            </StyledLink>
            <StyledLink to="/admin/impersonate">
                <Menu.Item>
                    Impersonate
                </Menu.Item>
            </StyledLink>
        </>
    )
}
