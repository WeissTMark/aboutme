import React from 'react';
import Bar from "../tools/Bar";
import "./home.css"
import {Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Toolbar, Typography} from "@mui/material";

const steps = [
    {
        label: 'Pre-College Life',
        description:
            `Middle School:
            ---- Introduced to Minecraft mods and Linus Tech Tips, I started thinking about how I could build my own computer.
            ---- Worked through the ranks of Boy Scouts getting up to Second Class.
            Freshman Year (HS):
            ---- Saved up enough money to buy very low end parts, and build my own computer.
            ---- Began playing 3 sports a year, Cross Country, Basketball, and Track.
            ---- Went to State in Track as a sub for the 4x800m run.
            ---- Achieved First Class in Boy Scouts, and became an Assistant Patrol Leader.
            Sophomore Year (HS):
            ---- Started taking CS classed in school, and made several minor Minecraft mods.
            ---- Experimented with hosting a Minecraft server from my home network.
            ---- Moved to JV Cross Country, JV Basketball, and Varsity Track running distance and 300m hurdles.
            ---- Achieved Star Scout, and became a Patrol Leader.
            Junior Year (HS):
            ---- Continued learning CS in school, and experimented with video game design. (I didn't get far)
            ---- Moved to Varsity Cross Country, and continued JV Basketball and Varsity Track.
            ---- Went to state for 4x800m again, and set school record
            ---- Became a Life Scout and Assistant Senior Patrol Leader.
            ---- Started looking at Colleges
            Senior Year (HS):
            ---- Decided to go to South Dakota Mines for Computer Science
            ---- Continued running Track and Cross Country
            ---- Finished my Eagle Scout Project`,

    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
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
        <Grid container justifyContent="center">
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Paper elevation={1} sx={{backgroundColor: 'rgba(147,196,224,0.8)'}}>
                    <Stepper activeStep={activeStep} orientation="vertical" sx={{p: 3}}>
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography sx={{whiteSpace: 'pre-line'}}>{step.description}</Typography>
                                    <Box sx={{mb: 2}}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{mt: 1, mr: 1}}
                                            >
                                                {index === steps.length - 1 ? 'Today' : 'Next Year'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{mt: 1, mr: 1}}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (<>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                                Reset
                            </Button>
                        </>
                    )}
                </Paper>
            </Grid>
            <Grid item xs={2}/>
        </Grid>

    </>)
}

export default Home;