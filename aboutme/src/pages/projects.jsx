import React from "react";
import Header from "../tools/bar";
import Footer from "../tools/footer";
import con from "../files/construction.jpg"
import {Paper} from "@mui/material";

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
                <img src={con} alt="Under construction" />
            </Paper>
            <Footer />
        </>
    )
}