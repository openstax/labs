import { React } from "@common";
import { FC, useState } from "react";
import { ParticipantStudy } from "@api";
import { Footer, TopNavBar } from "@components";
import { useEnvironment, useIsMobileDevice } from "@lib";
import { useParticipantStudies, useSearchStudies } from "./learner/studies";
import { StudyCard } from "./learner/card";
import { StudyDetails } from "./learner/details";
import { Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, FreeMode, Navigation } from "swiper/modules";
import { LearnerWelcomeModal } from "./learner/learner-welcome-modal";
import { UnsupportedCountryModal } from "./learner/unsupported-country-modal";
import {
    Button,
    Badge,
    Box,
    Container,
    Flex,
    Group,
    Stack,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import { groupBy } from "lodash";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { colors } from "@theme";
import { useMemo } from "react";
import { orderBy, uniqBy } from "lodash-es";
import ScrollToTopButton from "./researcher/ScrollToTopButton";

const HighlightedStudies: FC = () => {
    const { highlightedStudies } = useParticipantStudies();
    const isMobile = useIsMobileDevice();

    if (!highlightedStudies.length) return null;

    return (
        <Box bg={colors.navy} py="md">
            <Container>
                <Stack>
                    <Title c="white" order={2}>
                        Highlighted Studies
                    </Title>
                    {isMobile ? (
                        <MobileStudyCards studies={highlightedStudies} />
                    ) : (
                        <DesktopStudyCards studies={highlightedStudies} />
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

const LearnerDashboard = () => {
    const env = useEnvironment();

    if (!env.isEligible) {
        return <UnsupportedCountryModal />;
    }

    return (
        <div className="studies learner">
            <Routes>
                <Route path={"details/:studyId"} element={<StudyDetails />} />
            </Routes>

            <TopNavBar />

            <LearnerWelcomeModal />

            {/* Temporarily removing this as well until reward system reworked */}
            {/*<RewardsProgressBar />*/}

            {/* Temporarily disable syllabus contest due to legal, keep it just in case we re-enable in the future */}
            {/*<SyllabusContest studies={syllabusContestStudies} />*/}

            <HighlightedStudies />

            <StudiesContainer />
            <ScrollToTopButton />

            <Footer includeFunders />
        </div>
    );
};

export const SearchBar: FC<{
    search: string;
    setSearch: (search: string) => void;
}> = ({ search, setSearch }) => {
    const isMobile = useIsMobileDevice();

    return (
        <TextInput
            w={isMobile ? "100%" : "400px"}
            size="lg"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            rightSection={
                search.length ? (
                    <IconX
                        onClick={() => setSearch("")}
                        style={{ cursor: "pointer" }}
                    />
                ) : (
                    <IconSearch />
                )
            }
            placeholder="Search by study title, researcher, or topic name"
        />
    );
};

export const StudiesTitle: FC<{
    search: string;
    filteredStudies: ParticipantStudy[];
}> = () => {
    return <Title order={2}>View all Studies</Title>;
};

export const SearchResults: FC<{
    search: string;
    filteredStudies: ParticipantStudy[];
}> = ({ search, filteredStudies }) => {
    if (!search) {
        return null;
    }

    if (filteredStudies.length == 0) {
        return <Title order={4}>Sorry, no results found for '{search}'</Title>;
    }

    return (
        <Title order={4}>
            {filteredStudies.length} result
            {filteredStudies.length == 1 ? "" : "s"} for '{search}'
        </Title>
    );
};

export const StudiesContainer = () => {
    const { search, setSearch, filteredStudies } = useSearchStudies();

    return (
        <Container my="lg">
            <Stack gap="lg">
                <Flex justify="space-between" wrap="wrap">
                    <StudiesTitle
                        search={search}
                        filteredStudies={filteredStudies}
                    />

                    <SearchBar search={search} setSearch={setSearch} />
                </Flex>

                {/* Divider */}
                <div
                    style={{
                        width: "864px",
                        height: "1px",
                        backgroundColor: "#DBDBDB",
                        margin: "16px 0",
                        border: "1px solid #DBDBDB",
                    }}
                />

                <SearchResults
                    search={search}
                    filteredStudies={filteredStudies}
                />

                <StudiesByLearningPath filteredStudies={filteredStudies} />
            </Stack>
        </Container>
    );
};

export const MobileStudyCards: FC<{ studies: ParticipantStudy[] }> = ({
    studies,
}) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <Box sx={{ position: "relative" }}>
            {/*  HAVE TO FIX BUTTON POSITION */}

            {/* <Button
                onClick={() => swiperRef?.slidePrev()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    '&:hover': { opacity: 1 },
                }}
            >
                <IconChevronLeft size={24} />
            </Button> */}

            <Swiper
                effect={"cards"}
                slidesPerView={"auto"}
                cardsEffect={{
                    slideShadows: false,
                    perSlideOffset: 14,
                }}
                centeredSlides={true}
                modules={[EffectCards, Navigation]}
                onSwiper={setSwiperRef}
                style={{
                    paddingBottom: "2rem",
                    marginBottom: "1rem",
                }}
                pagination={false}
            >
                {studies.map((study) => (
                    <SwiperSlide key={study.id} className="pb-1">
                        <StudyCard study={study} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* <Button
                onClick={() => swiperRef?.slideNext()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    '&:hover': { opacity: 1 },
                }}
            >
                <IconChevronRight size={24} />
            </Button> */}
        </Box>
    );
};

export const DesktopStudyCards: FC<{ studies: ParticipantStudy[] }> = ({
    studies,
}) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <Box sx={{ position: "relative" }}>
            {/* button placemenet is not approriate  */}

            {/* <Button
                onClick={() => swiperRef?.slidePrev()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    '&:hover': { opacity: 1 },
                }}
            >
                <IconChevronLeft size={24} />
            </Button> */}

            <Swiper
                slidesPerView={3}
                simulateTouch={true}
                freeMode={true}
                style={{
                    marginBottom: "1rem",
                    paddingBottom: "2rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                }}
                navigation={{
                    enabled: true,
                }}
                modules={[FreeMode, Navigation]}
                onSwiper={setSwiperRef}
            >
                {studies.map((study) => (
                    <SwiperSlide style={{ padding: "1rem" }} key={study.id}>
                        <StudyCard study={study} />
                    </SwiperSlide>
                ))}
                pagination={false}
            </Swiper>

            {/*  Buttons placement is not appropriate  */}

            {/* <Button
                onClick={() => swiperRef?.slideNext()}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    '&:hover': { opacity: 1 },
                }}
            >
                <IconChevronRight size={24} />
            </Button> */}
        </Box>
    );
};

export const StudiesByLearningPath: FC<{
    filteredStudies: ParticipantStudy[];
}> = ({ filteredStudies }) => {
    const [learningPaths, studiesByLearningPath] = useMemo(() => {
        return [
            orderBy(
                uniqBy(
                    filteredStudies.map((fs) => fs.learningPath),
                    (lp) => lp?.label
                ),
                ["completed"],
                ["asc"]
            ),
            groupBy(filteredStudies, (study) => study.learningPath?.label),
        ];
    }, [filteredStudies]);

    const isMobile = useIsMobileDevice();

    return (
        <Stack gap="lg" data-testid="studies-listing">
            {learningPaths.map((learningPath) => {
                if (!learningPath) return null;
                const studies = studiesByLearningPath[learningPath.label];
                return (
                    <Stack key={learningPath.label}>
                        <Group gap="sm">
                            <Title order={3}>{learningPath.label}</Title>
                            <Text span>|</Text>
                            <Title order={3} fw="300">
                                {learningPath.description}
                            </Title>
                            {learningPath.completed ? (
                                <Badge c={colors.text} color={colors.green}>
                                    Completed
                                </Badge>
                            ) : null}
                        </Group>
                        {isMobile ? (
                            <MobileStudyCards studies={studies} />
                        ) : (
                            <DesktopStudyCards studies={studies} />
                        )}
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default LearnerDashboard;
