import React from "react";
import Header from "../tools/bar";
import Footer from "../tools/footer";
import {Paper, Typography, Link, Grid} from "@mui/material";

export default function Projects() {
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
                
            </Paper>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Typography variant='h5'>All my projects are available for viewing on my github account at:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}/>
                    <Grid item>
                    <Link variant='h5' href="https://github.com/WeissTMark">github.com/WeissTMark</Link>
                    </Grid>
                </Grid>
            <Footer />
        </>
    )
}