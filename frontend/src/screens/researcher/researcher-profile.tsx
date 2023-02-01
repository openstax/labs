import { Alert, Box, cx, Footer, HelpLink, Icon, InputField, ResourceLinks, SelectField, TopNavBar } from '@components';
import { React, styled, useNavigate, useState } from '@common';
import { errorToString, useApi, useCurrentResearcher, useEnvironment } from '@lib';
import { colors } from '../../theme';
import { Link } from 'react-router-dom';
import { SelectedStudies } from '../analysis/selected-studies';
import { Researcher } from '@api';
import { Button, Form, FormCancelButton, FormSaveButton } from '@nathanstitt/sundry';
import * as Yup from 'yup';
import CustomerSupportImage from '../../components/customer-support-image';
import RiceLogoURL from '../../images/rice-logo-darktext.png';

export const ResearcherValidationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    institution: Yup.string().required('Required'),
    researchInterest1: Yup.string(),
    researchInterest2: Yup.string(),
    researchInterest3: Yup.string(),
    labPage: Yup.string().url(),
    bio: Yup.string().required('Required'),
})


export default function ResearcherProfile() {
    const env = useEnvironment()
    const researcher = useCurrentResearcher()

    if (!researcher) {
        return useNavigate()('/');
    }

    return (
        <PageWrapper>
            <TopNavBar />
            <Content className='container-lg py-5'>
                <Box justify='between'>
                    <h3>My Account</h3>
                    <Link to={`${env.accounts_url}`}>
                        <span>Update Email & Password</span>
                        <Icon icon="right" />
                    </Link>
                </Box>

                <Box justify='between' gap='xxlarge'>
                    <Box direction='column'>
                        <ProfileSection className='researcher-profile'>
                            <Box gap='xlarge' className='container-fluid'>
                                <Box className='col-3' justify='center'>
                                    Avatar
                                </Box>
                                <ProfileForm researcher={researcher} className='col-9'/>
                            </Box>
                        </ProfileSection>

                        <ProfileSection direction='column' gap='xxlarge'>
                            <IRB/>
                            <TermsOfUse/>
                        </ProfileSection>
                    </Box>
                    <Resources direction='column'>
                        <ResourceLinks />
                        <CustomerSupportImage />
                        <HelpLink />
                    </Resources>
                </Box>
            </Content>

            <Footer className='mt-auto' />
        </PageWrapper>
    )
}

const IRB = () => {
    return (
        <Box justify='between'>
            <h6>IRB Detail</h6>
            <Box css={{ border: '1px solid grey', padding: 10 }} className='small' direction='column' gap>
                <Box gap='large'>
                    <img alt="Rice University logo" height="50" src={RiceLogoURL}/>
                    <Box direction='column'>
                        <span>IRB Number: DSA5CSA4</span>
                        <span css={{ color: colors.grayText }}>Expires on 12/31/2025</span>
                    </Box>
                </Box>
                <Box direction='column'>
                    <Box justify='between'>
                        <span>Principal Investigator:</span>
                        <span>First Name Last Name</span>
                    </Box>
                    <Box justify='between'>
                        <div>Institution Name:</div>
                        <div>Rice University</div>
                    </Box>
                </Box>
            </Box>
            <Link to='/'>
                <span>Check Details</span>
                <Icon icon="right" />
            </Link>
        </Box>
    )
}

const TermsOfUse = () => {
    return (
        <Box justify='between'>
            <h6>Terms of Use</h6>
            <p>Guidelines for Kinetic use</p>
            <Link to='/'>
                <span>Check Details</span>
                <Icon icon="right" />
            </Link>
        </Box>
    )
}

const formStyles = {
    backgroundColor: 'white',
    minHeight: '3.5rem',
    button: {
        width: 130,
        justifyContent: 'center',
    },
}

const ProfileForm: React.FC<{researcher: Researcher, className: string}> = ({ researcher, className }) => {
    console.log(researcher);

    const api = useApi()
    const [error, setError] = useState('')
    const [editing, setEditing] = useState(false)
    const [institution, setInstitution] = useState(researcher.institution)

    const saveResearcher = async (researcher: Researcher) => {
        console.log('updating: ', researcher);
        try {
            if (!researcher.id) {
                return;
            }
            await api.updateResearcher({
                id: researcher.id,
                updateResearcher: { researcher },
            })
        }
        catch (err) {
            setError(await errorToString(err))
        }
        setEditing(false)
    }

    return (
        <Form
            onSubmit={saveResearcher}
            className={cx(className, 'row')}
            css={formStyles}
            showControls
            readOnly={!editing}
            onCancel={() => setEditing(false)}
            enableReinitialize
            defaultValues={researcher}
            validationSchema={ResearcherValidationSchema}
        >
            <Alert warning={true} onDismiss={() => setError('')} message={error} />

            <div className='col-6'>
                <h6>Name</h6>
                <InputField name="name" label="Researcher Name"/>
            </div>

            <div className='col-6'>
                <h6>Institution</h6>
                <SelectField
                    name="institution" id="institution" label="Institution"
                    onChange={(opt: string) => setInstitution(opt)}
                    value={institution}
                    options={[{ value: 'rice', label: 'Rice' }]}
                    auto
                />
            </div>

            <div className='col-4'>
                <h6>Researcher Interest 1</h6>
                <InputField name="researchInterest1" label="Research Interest 1" />
            </div>

            <div className='col-4'>
                <h6>Researcher Interest 2</h6>
                <InputField name="researchInterest2" label="Research Interest 2"/>
            </div>

            <div className='col-4'>
                <h6>Researcher Interest 3</h6>
                <InputField name="researchInterest3" label="Research Interest 3" />
            </div>

            <div>
                <h6>Lab Page Link</h6>
                <InputField name="labPage" label="Lab Page Link" />
            </div>

            <div>
                <h6>Bio</h6>
                <InputField name="bio" type="textarea" label="Bio" />
            </div>

            {!editing &&
                <Box gap>
                    <Button primary data-test-id="form-edit-btn" onClick={() => setEditing(true)}>
                        Edit Profile
                    </Button>
                </Box>
            }
            {editing &&
                <Box gap>
                    <FormSaveButton primary>
                        Save
                    </FormSaveButton>
                    <FormCancelButton onClick={() => setEditing(false)}>
                        Cancel
                    </FormCancelButton>
                </Box>
            }
            <SelectedStudies />
        </Form>
    );
}

const PageWrapper = styled(Box)({
    backgroundColor: colors.pageBackground,
    flexDirection: 'column',
    height: '100vh',
})

const Content = styled.div({
})

const ProfileSection = styled(Box)({
    backgroundColor: colors.white,
    border: '1px solid #DBDBDB',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
    padding: 30,
})

const Resources = styled(Box)({
    height: '100%',
    width: 300,
    border: '1px solid #DBDBDB',
    borderRadius: 5,
    backgroundColor: colors.white,
    marginTop: 20,
    marginBottom: 10,
    padding: 30,
})
