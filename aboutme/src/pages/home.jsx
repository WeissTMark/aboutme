import React from 'react';
import Bar from "../tools/Bar";
import "./home.css"
import {
    Box,
    Button,
    Grid,
    Paper,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Toolbar,
    Typography
} from "@mui/material";
import {Animator, Fade, batch, Move, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";

const steps = [
    {
        label: 'Pre-College Life',
        years: '2000 - 2018',
        description:
            `I first decided I wanted to go into Computer Science after a few years of playing Minecraft, and falling in love with technical modpacks.
             That pushed me to pursue Computer Science classes all through high school. That paired with being Senior Patrol Leader in my Boy Scout Troop
             put me in a good position to lead group projects throughout college.`,

    },
    {
        label: 'Freshman Year',
        years: '2018 - 2019',
        description:
            `tmp`,
    },
    {
        label: 'Sophomore Year',
        years: '2019 - 2020',
        description: `tmp`,
    },
        {
        label: 'Junior Year',
        years: '2020 - 2021',
        description: `tmp`,
    },
        {
        label: 'Senior Year',
        years: '2021 - 2022',
        description: `tmp`,
    },
        {
        label: 'Senior Year pt. 2',
        years: '2022 - 2023',
        description: `tmp`,
    },
];

const Home = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (<>
        <Bar/>
        <Toolbar sx={{m: 2}}/>
        {/*<Grid container justifyContent="center">*/}
        {/*    <Grid item xs={2}/>*/}
        {/*    <Grid item xs={8}>*/}
        {/*        <Paper elevation={1} sx={{backgroundColor: 'rgba(215,225,231,0.8)'}}>*/}
        {/*            <Stepper activeStep={activeStep} orientation="vertical" sx={{p: 3}}>*/}
        {/*                {steps.map((step, index) => (*/}
        {/*                    <Step key={step.label}>*/}
        {/*                        <StepLabel*/}
        {/*                            optional={<Typography variant="caption">{step.years}</Typography>}*/}
        {/*                        >*/}
        {/*                            {step.label}*/}
        {/*                        </StepLabel>*/}
        {/*                        <StepContent>*/}
        {/*                            <Typography sx={{whiteSpace: 'pre-line'}}>{step.description}</Typography>*/}
        {/*                            <Box sx={{mb: 2}}>*/}
        {/*                                <div>*/}
        {/*                                    <Button*/}
        {/*                                        variant="contained"*/}
        {/*                                        onClick={handleNext}*/}
        {/*                                        sx={{mt: 1, mr: 1}}*/}
        {/*                                    >*/}
        {/*                                        {index === steps.length - 1 ? 'Today' : 'Next Year'}*/}
        {/*                                    </Button>*/}
        {/*                                    <Button*/}
        {/*                                        color="secondary"*/}
        {/*                                        disabled={index === 0}*/}
        {/*                                        onClick={handleBack}*/}
        {/*                                        sx={{mt: 1, mr: 1}}*/}
        {/*                                    >*/}
        {/*                                        Back*/}
        {/*                                    </Button>*/}
        {/*                                </div>*/}
        {/*                            </Box>*/}
        {/*                        </StepContent>*/}
        {/*                    </Step>*/}
        {/*                ))}*/}
        {/*            </Stepper>*/}
        {/*            {activeStep === steps.length && (<>*/}
        {/*                    <Typography>All steps completed - you&apos;re finished</Typography>*/}
        {/*                    <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>*/}
        {/*                        Reset*/}
        {/*                    </Button>*/}
        {/*                </>*/}
        {/*            )}*/}
        {/*        </Paper>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={2}/>*/}
        {/*</Grid>*/}

        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h3">2014 - 2018</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">Scroll animation owo<br /> UWUUUUUUU</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography>Scroll animation owo</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography>Scroll animation owo</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography>Scroll animation owo</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 1000, 0, -1000))}>
                    <Typography>Scroll animation owo</Typography>
                </Animator>
            </ScrollPage>
        </ScrollContainer>

    </>)
}

export default Home;