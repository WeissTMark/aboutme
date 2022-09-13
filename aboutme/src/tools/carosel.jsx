import React from 'react';
import {
    Button,
    Card,
    CardMedia,
    Dialog,
    DialogTitle,
    Grid,
    IconButton,
    MobileStepper,
    Slide,
    Typography,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const TransitionUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const Carosel = (props) => {
    const images = props.images
    const [treeOpen, setTreeOpen] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(1);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            {images.map((img, index) => {
                if (index === activeStep) {
                    return (
                        <Grid container spacing={1} sx={{ m: 1 }}>
                            <Grid item xs={4}>
                                {index > 0 ?
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="380"
                                            src={images[index - 1].imgPath}
                                            alt={images[index - 1].label}
                                            onClick={() => { handleTreeOpen(-1) }}
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
                                        onClick={() => { handleTreeOpen(0) }}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4} sx={{ alignContent: 'center' }}>
                                {index < maxSteps - 1 ?
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="380"
                                            src={images[index + 1].imgPath}
                                            alt={images[index + 1].label}
                                            onClick={() => { handleTreeOpen(1) }}
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
            <Grid item sx={{ pl: 4 }} xs={12} justifyContent="center" alignItems="center" >
                <MobileStepper variant="dots"
                    steps={maxSteps}
                    sx={{ bgcolor: 'transparent' }}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >Next<KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />Back
                        </Button>
                    }
                />
            </Grid>
            <Dialog
                open={treeOpen}
                TransitionComponent={TransitionUp}
                onClose={handleTreeClose}
                aria-describedby={"TreeCutting Photo"}>
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    <Typography>{images[activeStep].label}</Typography>
                    <IconButton
                        aria-label="Close"
                        onClick={handleTreeClose}
                        sx={{
                            position: 'absolute',
                            right: 8, top: 8
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <img src={images[activeStep].imgPath} alt={images[activeStep].label} />
            </Dialog>
        </>
    )
}

export default Carosel;