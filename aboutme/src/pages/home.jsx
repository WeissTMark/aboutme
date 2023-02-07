import React from 'react';
import Header from '../tools/bar';
import {
    Grid,
    Paper,
    Typography,
    Link
} from "@mui/material";
import tree from '../files/tree.png'
import sarah from '../files/sarah.jpg'
import woods from '../files/markwoods.jpg'
import novabed from '../files/novabed.jpg'
import novat from '../files/novatowel.jpg'
import painting from '../files/painting.jpg'
import mns from '../files/marknsarah.jpg'
import axe from '../files/markaxe.jpg'
import epn1 from '../files/EP-1.jpg'
import ep0 from '../files/EP0.jpg'
import ep1 from '../files/EP1.jpg'
import ep2 from '../files/EP2.jpg'
import ep25 from '../files/EP25.jpg'
import ep3 from '../files/EP3.jpg'
import ep4 from '../files/EP4.jpg'
import ep5 from '../files/EP5.jpg'
import m1 from '../files/m1.jpg'
import m2 from '../files/m2.jpg'
import m3 from '../files/m3.jpg'
import m4 from '../files/m4.jpg'
import Carosel from '../tools/carosel';
import Footer from '../tools/footer';


const sarahNova = [
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

const eagle = [
    {
        key: 0,
        label: 'A before shot of the trail for mark\'s eagle project',
        imgPath: epn1
    },
    {
        key: 7,
        label: 'A picture of Mark after completing his Eagle Board of Honor',
        imgPath: ep25
    },
    {
        key: 1,
        label: 'A before shot of the trail for mark\'s eagle project',
        imgPath: ep0
    },
    {
        key: 2,
        label: 'A shot of the trail during construction',
        imgPath: ep1
    },
    {
        key: 3,
        label: 'A shot of the trail during construction',
        imgPath: ep2
    },
    {
        key: 4,
        label: 'A shot of the barbed wire that had to be removed',
        imgPath: ep3
    },
    {
        key: 5,
        label: 'A shot of the barbed wire that had to be removed',
        imgPath: ep4
    },
    {
        key: 6,
        label: 'An after shot of the trail',
        imgPath: ep5
    },
]

const mark = [
    {
        key: 0,
        label: 'Mark!',
        imgPath: m1
    },
    {
        key: 1,
        label: 'mArk! (And Sarah)',
        imgPath: m4
    },
    {
        key: 2,
        label: 'maRk!',
        imgPath: m3
    },
    {
        key: 3,
        label: 'marK!',
        imgPath: m2
    },
]



export default function Home() {



    // true = left
    // false = right




    return (
        <>
            <Header />
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
                <Grid container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant={'h1'} color='secondary'>Who is Mark Weiss?</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Carosel images={mark} />
                    </Grid>
                    <Grid item xs={7}>
                        <Carosel images={eagle} />
                    </Grid>
                    <Grid item xs={4} sx={{ m: 2 }}>
                        <Typography variant='h5'>First and formemost. He's an Eagle Scout!</Typography>
                        <Typography>Mark spent his youth going to summer camps, catching fish, and tying
                            the most excelent of knots. During the spring of 2018, He began undertaking
                            his Eagle Scout Project, where utilizing 120 total hours of community service,
                            he helped create and refurbish a hiking trail outside of Castle Rock Elementary
                            School. To be used by the P.E. teacher and all the students attending.</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ m: 2 }}>
                        <Typography variant='h5'>Compassionate, and a team player!</Typography>
                        <Typography>In the images seen to the right, the woman is Sarah Ziehm,
                            my partner in crime, and the cat is our sweet girl Nova. As a self-diagnosed work-a-holic
                            Sarah encourages me to do better, work harder, be more productive, and
                            generally have a better grind and outlook on my work. This allows me
                            to become a confident leader when the situation arises, as well as
                            lets me work through my problems and think of efficient, simple, and
                            effective work arounds to any problems or bugs I may have.</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Carosel images={sarahNova} />
                    </Grid>
                    <Grid item xs={5} sx={{mb: 5}}>
                    <Typography variant='h5'>So who is he?</Typography>
                        <Typography>
                            tldr; Mark is a hard working, fast learning, problem solving, easy listening, 
                            expert googling, full commiting, keyboard typing, cat petting, full stack software
                            developing, soon graduating applicant looking for the perfect job 
                            where he will feel at home and welcomed. 
                            
                            So thank you for taking your time to browse this site, and inquire about Mark as 
                            a person and possible employee. Have a wonderful day!
                        </Typography>
                    </Grid>

                </Grid>

            </Paper>

            <Footer/>
        </>
    )
}
