import { Box, cx, React, styled, useState } from '@common'

import '../../src/index.css'
import '../../src/styles/main.scss'
import { colors } from '../../src/theme';
import { Footer, Icon } from '@components';
import 'bootstrap/dist/js/bootstrap.min'
import {
    alumni,
    AlumnusMember,
    Publication,
    publications,
    ResearchArea,
    researchFocusAreas,
    ResearchMember,
    researchMembers,
} from './research-data';
import boxArrowInUpRight from '@iconify-icons/bi/box-arrow-in-up-right';
import HowManyLettersYouRemember from '../../src/components/study-card-images/HowManyLettersYouRemember';
import chevronDown from '@iconify-icons/bi/chevron-down';
import chevronUp from '@iconify-icons/bi/chevron-up';
import { Button, Modal } from '@restart/ui';

export const ResearchHomepage = () => (
    <div css={{ backgroundColor: colors.white }}>
        <style>
            {`
                .nav-tabs .nav-link.active {
                    color: #495057;
                    background-color: rgba(0,0,0,0) !important;
                    border-bottom-width: 4px;
                    border-color: rgba(0,0,0,0) rgba(0,0,0,0) #63A524 rgba(0,0,0,0);
                }
            `}
        </style>

        <Header></Header>
        <Banner></Banner>
        <ColorBar></ColorBar>
        <ResearchFocusAreas></ResearchFocusAreas>

        <Publications></Publications>

        <Members></Members>
        <Footer includeFunders></Footer>
    </div>
)

export const Header = () => (
    <div className="py-5" css={{ backgroundColor: colors.lightBlue }}>
        <Box className='container' align='center'>
            <h1 className='fw-bolder' css={{ color: colors.white, flex: 3 }}>
                Advancing multi-disciplinary research to improve learner success.
            </h1>
            {/* TODO Update with correct image */}
            <HowManyLettersYouRemember css={{ flex: 2 }}/>
        </Box>
    </div>
)

export const Banner = () => (
    <div className="py-2" css={{ backgroundColor: colors.lightTeal }}>
        <Box className='container align-items-center' gap='xlarge'>
            <h3 className='fw-bold text-center' css={{ color: colors.blackText, flex: 1 }}>
                Calling all learning researchers!
            </h3>
            <Box direction='column' css={{ flex: 4 }}>
                <p>Learn about the research workflow on OpenStax Kinetic during office hours hosted with IES!</p>
                <a className='text-decoration-none' href='https://ies.ed.gov/funding/technicalassistance.asp' target='_blank'>
                    <Box align='center'>
                        IES Office Hours
                        &nbsp;
                        <Icon icon={boxArrowInUpRight}></Icon>
                    </Box>
                </a>
            </Box>
        </Box>
    </div>
)

export const ColorBar = () => (
    <Box>
        <span css={{
            backgroundColor: colors.orange,
            height: 10,
            width: '36%',
        }}></span>
        <span css={{
            backgroundColor: colors.purple,
            height: 10,
            width: '16%',
        }}></span>
        <span css={{
            backgroundColor: colors.red,
            height: 10,
            width: '10%',
        }}></span>
        <span css={{
            backgroundColor: colors.yellow,
            height: 10,
            width: '20%',
        }}></span>
        <span css={{
            backgroundColor: colors.lightBlue,
            height: 10,
            width: '18%',
        }}></span>
    </Box>
)

export const ResearchFocusAreas = () => (
    <div className='container'>
        <h2 className='pt-4 pb-2'>Areas of Research Focus</h2>
        <ul className="nav nav-tabs" id="research-areas" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="kinetic-tab" data-bs-toggle="tab" data-bs-target="#kinetic"
                    type="button" role="tab" aria-controls="kinetic" aria-selected="true">
                    Research on OpenStax Kinetic
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai"
                    type="button" role="tab" aria-controls="ai" aria-selected="false">
                    AI/ML in education
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education"
                    type="button" role="tab" aria-controls="education" aria-selected="false">
                    Applied Education Research
                </button>
            </li>
        </ul>
        <div className="tab-content py-3">
            <div className="tab-pane fade show active" id="kinetic" role="tabpanel" aria-labelledby="kinetic-tab">
                <p>
                    OpenStax Kinetic is a new research infrastructure that enables researchers to connect with real
                    learners studying curricular content in authentic learning environments. Researchers can leverage
                    Qualtrics to design a variety of studies (e.g., surveys, Randomized Control Trials, A/B/N tests)
                    and make them available on Kinetic to <strong>US adult higher education learners.</strong>
                    Kinetic researchers can effectively address 3 key questions in learning and how they interact:
                </p>
                <ol>
                    <li><strong>Who is the learner?</strong></li>
                    <li><strong>What are they learning?</strong></li>
                    <li><strong>How are they learning?</strong></li>
                </ol>
                <hr/>
                {researchFocusAreas['kinetic'].map((researchArea, index) =>
                    <ResearchFocusArea researchArea={researchArea} key={index}></ResearchFocusArea>
                )}
            </div>
            <div className="tab-pane fade" id="ai" role="tabpanel" aria-labelledby="ai-tab">
                <p>
                    In collaboration with leading researchers in the AI/ML in education space and the&nbsp;
                    <a href='https://dsp.rice.edu/' target='_blank'>Digital Signal Processing research group</a>
                    &nbsp;at Rice University, we investigate how to
                    effectively utilize AI/ML advancements to address crucial issues in learning and education.
                    Our research explores natural language processing for content generation, predictive models
                    for learning analytics, and hybrid models for generation of knowledge graphs. We aim to use
                    a combination of these efforts to optimally personalize learning experiences for learners.
                </p>
                {researchFocusAreas['ai'].map((researchArea, index) =>
                    <ResearchFocusArea researchArea={researchArea} key={index}></ResearchFocusArea>
                )}
            </div>
            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                <p>
                    This learner- and educator- centered initiative aims to promote educational equity.
                    To this end, we engage with learners, educators, institutions, and the community and
                    utilize participatory and mixed- research methods. By working with educators and learners,
                    we identify issues that are most important for them and work toward evidence-based approaches
                    to address them. Ultimately, we work with our product teams to build evidence-based learner
                    supports that are iteratively refined.
                </p>
                {researchFocusAreas['education'].map((researchArea, index) =>
                    <ResearchFocusArea researchArea={researchArea} key={index}></ResearchFocusArea>
                )}
            </div>
        </div>
    </div>
)

export const ResearchFocusArea: React.FC<{researchArea: ResearchArea}> = ({ researchArea }) => (
    <div className='py-1'>
        <Box gap='large'>
            {/* TODO Dynamic images */}
            <HowManyLettersYouRemember css={{ flex: 2 }}/>
            <Box direction='column' css={{ flex: 6 }}>
                <h5 className='fw-bold'>{researchArea.title}</h5>
                <p>{researchArea.description}</p>
                {researchArea.cta &&
                    <div>
                        <a href={researchArea.cta?.url} target='_blank'>
                            {researchArea.cta?.text}
                        </a>
                    </div>
                }
            </Box>
            <p css={{ flex: 1 }}>view more?</p>
        </Box>
        <hr/>
    </div>
)

export const Publications = () => {
    const [viewAll, setViewAll] = useState(false);
    const publicationList = viewAll ? publications : publications.slice(0, 5);
    return (
        <Box direction='column' className='container'>
            <h2>Publications</h2>
            {publicationList.map((publication, index) =>
                <PublicationItem key={index} publication={publication}/>
            )}
            <p className='py-4 align-self-center'
                onClick={() => setViewAll(!viewAll)}
                css={{ cursor: 'pointer', color: colors.linkText }}
            >
                <Icon icon={viewAll ? chevronUp : chevronDown}></Icon>
                &nbsp;
                {viewAll ? 'View Less' : 'View All Publications'}
            </p>
        </Box>
    )
}

export const PublicationItem: React.FC<{publication: Publication}> = ({ publication }) => (
    <Box direction='column' margin={{ top: 'xlarge' }}>
        <div>
            <a className='fw-bold' href={publication.pdf} target='_blank'>
                {publication.title}
            </a>
        </div>
        <div>
            <span>{publication.date} &middot;&nbsp;</span>
            <span css={{ color: colors.grayText }}>
                {publication.body}
            </span>
        </div>
        <Box gap='xlarge'>
            <a className='text-decoration-none' href={publication.pdf} target='_blank'>
                <Box align='center'>
                    Pdf&nbsp;
                    <Icon icon={boxArrowInUpRight}></Icon>
                </Box>
            </a>
            {publication.github && <a className='text-decoration-none' href={publication.github} target='_blank'>
                <Box align='center'>
                    Github
                    <Icon icon={boxArrowInUpRight}></Icon>
                </Box>
            </a>}
        </Box>
    </Box>
)

const MemberGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const AlumniGrid = styled.div`

`;

export const Members = () => (
    <div css={{ backgroundColor: colors.lightGrayBackground }}>
        <div className='container'>
            <h2 className='pt-4 pb-2'>Team Members</h2>
            <ul className="nav nav-tabs" id="team-members" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="current-tab" data-bs-toggle="tab" data-bs-target="#current"
                        type="button" role="tab" aria-controls="current" aria-selected="true">
                        Current Members
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="collaborating-tab" data-bs-toggle="tab" data-bs-target="#collaborating"
                        type="button" role="tab" aria-controls="collaborating" aria-selected="false">
                        Collaborating Researchers
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="alumni-tab" data-bs-toggle="tab" data-bs-target="#alumni"
                        type="button" role="tab" aria-controls="alumni" aria-selected="false">
                        Alumni
                    </button>
                </li>
            </ul>
            <div className="tab-content px-2 py-5">
                <div className="tab-pane fade show active" id="current" role="tabpanel" aria-labelledby="current-tab">
                    <MemberGrid>
                        {researchMembers['current'].map((member, index) =>
                            <Member member={member} key={index}/>
                        )}
                    </MemberGrid>
                </div>
                <div className="tab-pane fade" id="collaborating" role="tabpanel" aria-labelledby="collaborating-tab">
                    <MemberGrid>
                        {researchMembers['collaborating'].map((member, index) =>
                            <Member member={member} key={index}/>
                        )}
                    </MemberGrid>
                </div>
                <div className="tab-pane fade" id="alumni" role="tabpanel" aria-labelledby="alumni-tab">
                    <AlumniGrid>
                        {alumni.map((alumnus, index) =>
                            <Alumnus alumnus={alumnus} key={index}/>
                        )}
                    </AlumniGrid>
                </div>
            </div>
        </div>
    </div>
)

export const Member: React.FC<{member: ResearchMember}> = ({ member }) => {
    const [show, setShow] = useState(false);
    return (
        <Box direction='column' align='center' className='text-center'>
            <img alt={member.firstName} src='https://placedog.net/640/480?random' height={145} width={145}/>
            <Button as='a' type='button' onClick={() => setShow(true)}>
                {member.firstName} {member.lastName}
            </Button>
            <Modal
                show={show}
                className={cx('modal', 'fade', {
                    show,
                })}
                style={{ display: 'block', pointerEvents: 'none', overflow: 'auto' }}
                aria-labelledby="member-modal"
                onHide={() => setShow(false)}
                renderBackdrop={(props) => (
                    <div className="modal-backdrop fade show" {...props} />
                )}
            >
                <div className='modal-dialog-centered modal-dialog-scrollable h-auto mx-auto w-75'>
                    <div className="modal-content" css={{ height: '100%' }}>
                        <MemberDetails member={member}/>
                    </div>
                </div>
            </Modal>
        </Box>
    )
}

export const MemberDetails: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box>
            <MemberInfo member={member}/>
            <MemberEducation member={member}/>
            <MemberInterest member={member}/>
            <MemberBio member={member}/>
            <MemberLinks member={member}/>
        </Box>
    )
}

export const MemberInfo: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box>
            <img src={member.image} alt={member.title}/>
            <Box direction='column'>
                <h4>{member.name}</h4>
                <p css={{ color: colors.grayText }}>
                    {member.title}
                </p>
            </Box>
        </Box>
    )
}

export const MemberEducation: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box direction='column'>
            <h5>Education</h5>
            <p></p>
        </Box>
    )
}

export const MemberInterest: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box>
        </Box>
    )
}

export const MemberBio: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box>
        </Box>
    )
}

export const MemberLinks: React.FC<{member: ResearchMember}> = ({ member }) => {
    return (
        <Box>
        </Box>
    )
}


export const Alumnus: React.FC<{alumnus: AlumnusMember}> = ({ alumnus }) => (
    <Box gap='xxlarge'>
        <a css={{ flex: 1 }} href={alumnus.linkedin}>{alumnus.name}</a>
        <p css={{ flex: 5, color: colors.grayText }}>{alumnus.title}</p>
    </Box>
)
