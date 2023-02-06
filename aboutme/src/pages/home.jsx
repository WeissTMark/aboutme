import React from 'react';
import Bar from "../tools/Bar";
import EP25 from '../files/EP25.jpg'
import markaxe from '../files/markaxe.jpg'
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
        <Grid container justifyContent="center" align="center" spacing={2}>
            <Grid item xs={12} justifyContent="center">
                <Typography variant="h1" align='center'>Who is Mark Weiss?</Typography>
            </Grid>
            <Grid item xs={8} justifyContent="stretch" alignItems="stretch">
                <Paper elevation={1} sx={{backgroundColor: 'rgba(215,225,231,0.7)'}}>
                <Typography variant="h6" sx={{p:2}}>
                    I am currently a part time Software Developer working at Golden West Telecommunications.
                    I am also a 5th year student at South Dakota Mines working on my Bachelors degree in Computer Science.
                    
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} justifyContent="center">
                <Typography variant="h1" align='center'>2014-2018</Typography>
            </Grid>
            <Grid item xs={10}>
                <img src={EP25} style={{width: 235, height: 315}}/>
            </Grid>
            <Grid item xs={7} justifyContent="stretch" alignItems="stretch">
                <Paper elevation={1} sx={{backgroundColor: 'rgba(215,225,231,0.7)'}}>
                <Typography variant="h5" align="left" sx={{p:2}}>
                    TEAMWORK MAKES THE DREAMWORK
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}><div style={{height:100}}/></Grid>
            <Grid item xs={12} justifyContent="center">
                <Typography variant="h1" align='center'>2018-2019</Typography>
            </Grid>
            <Grid item xs={3.5}>
                <img src={markaxe} style={{width: 400, height: 250}}/>
            </Grid>
            <Grid item xs={7} justifyContent="stretch" alignItems="stretch">
                <Paper elevation={1} sx={{backgroundColor: 'rgba(215,225,231,0.8)', height: 250}}>
                <Typography variant="h5" align="left" sx={{p:2}}>
                    This is a description of my high school years! And I am adding a lof of fluff text to make sure it goes to the next line
                </Typography>
                </Paper>
            </Grid>
        </Grid>

        <div style={{height: 4000}}/>

        {/* <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">2014 - 2018</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={painting} style={{width: 300, height: 250}}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6">This is information about my high school years</Typography>
                        </Grid>
                    </Grid>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">2018-2019</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">2019-2020</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">2020-2021</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 700, 0, -700))}>
                    <Typography variant="h1">2021-2022</Typography>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), Move(0, 1000, 0, -1000))}>
                    <Typography variant="h1">2022-2023</Typography>
                </Animator>
            </ScrollPage>
        </ScrollContainer> */}

    </>)
}

export default Home;