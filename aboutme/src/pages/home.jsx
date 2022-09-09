import React, {useRef} from 'react';
import Header from '../tools/bar';
import {
    Button,
    Card,
    CardMedia,
    Dialog,
    DialogTitle,
    Grid,
    IconButton,
    MobileStepper,
    Paper,
    Slide,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import tree from '../files/tree.png'
import sarah from '../files/sarah.jpg'
import woods from '../files/markwoods.jpg'
import novabed from '../files/novabed.jpg'
import novat from '../files/novatowel.jpg'
import painting from '../files/painting.jpg'
import mns from '../files/marknsarah.jpg'
import axe from '../files/markaxe.jpg'
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";


const images = [
    {
        key: 0,
        label: 'Mark staring gallantly into the distance',
        imgPath: tree
    },
    {
        key: 1,
        label: 'Mark and his partner Sarah',
        imgPath: sarah
    },
    {
        key: 2,
        label: 'Mark trying to support his own weight between two trees',
        imgPath: woods
    },
    {
        key: 3,
        label: 'Our sweet kitty Nova in her favorite bed',
        imgPath: novabed
    },
    {
        key: 4,
        label: 'Our sweet kitty Nova in her other favorite bed',
        imgPath: novat
    },
    {
        key: 5,
        label: 'Mark Sarah on a date',
        imgPath: mns
    },
    {
        key: 6,
        label: 'Mark after hitting his first "kill shot" at a local axe throwing venue',
        imgPath: axe
    },
    {
        key: 7,
        label: 'A painting Mark created with Sarah as the subject',
        imgPath: painting
    }
]

const TransitionUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function Home() {
    const [treeOpen, setTreeOpen] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(1);
    const [transitionDirection, setTransitionDirection] = React.useState(false)
    const maxSteps = images.length;
    const [checked, setChecked] = React.useState(true);
    const [checkedPrev, setCheckedPrev] = React.useState(true);
    const [checkedPost, setCheckedPost] = React.useState(true);


    // true = left
    // false = right
    const handleNext = () => {
        setTransitionDirection(true)
        setCheckedPrev(false)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCheckedPrev(true)
    };

    const handleBack = () => {
        setTransitionDirection(false)
        setCheckedPost(false)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setCheckedPost(true)
    };

    const handleTreeOpen = (val) => {
        setActiveStep((prev) => prev + val)
        setTreeOpen(true)
    }

    const handleTreeClose = () => {
        setTreeOpen(false)
    }


    return (
        <>
            <Header/>
            <Paper elevation={3} sx={{
                m: 1, display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                bgcolor: '#e8e8e8',
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px",
            }}>
                <Grid container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                }}>
                    <Grid item xs={12}>
                        <Typography variant={'h1'} color='secondary'>Who is Mark Weiss?</Typography>
                    </Grid>
                    {images.map((img, index) => {
                        if (index === activeStep) {
                            return (
                                <Grid container spacing={1} sx={{m:1}}>
                                    <Grid item xs={4}>
                                        {index > 0 ?
                                                <Card>
                                                    <CardMedia
                                                        component="img"
                                                        height="380"
                                                        src={images[index - 1].imgPath}
                                                        alt={images[index - 1].label}
                                                        onClick={() => {handleTreeOpen(-1)}}
                                                    />
                                                </Card>
                                            : <></>}
                                    </Grid>
                                    <Grid item xs={4}>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="400"
                                                    src={img.imgPath}
                                                    alt={img.label}
                                                    onClick={() => {handleTreeOpen(0)}}
                                                />
                                            </Card>
                                    </Grid>
                                    <Grid item xs={4} sx={{alignContent: 'center'}}>
                                        {index < maxSteps - 1 ?
                                                <Card>
                                                    <CardMedia
                                                        component="img"
                                                        height="380"
                                                        src={images[index + 1].imgPath}
                                                        alt={images[index + 1].label}
                                                        onClick={() => {handleTreeOpen(1)}}
                                                    />
                                                </Card>
                                            : <></>}
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (<></>)
                        }

                    })}
                    <Grid item xs={12}/>
                    <Grid item xs={3}>
                        <MobileStepper variant="dots"
                                       steps={maxSteps}
                                       sx={{bgcolor: 'transparent'}}
                                       position="static"
                                       activeStep={activeStep}
                                       nextButton={
                                           <Button
                                               size="small"
                                               onClick={handleNext}
                                               disabled={activeStep === maxSteps - 1}
                                           >Next<KeyboardArrowRight/>
                                           </Button>
                                       }
                                       backButton={
                                           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                               <KeyboardArrowLeft/>Back
                                           </Button>
                                       }
                        />
                    </Grid>

                </Grid>

            </Paper>

            <Dialog
                open={treeOpen}
                TransitionComponent={TransitionUp}
                onClose={handleTreeClose}
                aria-describedby={"TreeCutting Photo"}>
                <DialogTitle sx={{m: 0, p: 2}}>
                    <Typography>{images[activeStep].label}</Typography>
                    <IconButton
                        aria-label="Close"
                        onClick={handleTreeClose}
                        sx={{
                            position: 'absolute',
                            right: 8, top: 8
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <img src={images[activeStep].imgPath} alt={images[activeStep].label}/>
            </Dialog>
        </>
    )
}