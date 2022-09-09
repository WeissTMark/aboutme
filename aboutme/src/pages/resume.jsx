import React from "react";
import Header from "../tools/bar";
import { Document, Page } from 'react-pdf';
import { Paper, Box } from '@mui/material';
import resume from '../files/Weiss-Resume-Sept2022.pdf'

export default function Resume() {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);
    const height = window.innerHeight - 100

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <Header/>
            <Paper elevation={3} sx={{m:1}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding:6, height:height}}>
                    <Document  file={resume} options={{workerSrc: "pdf.worker.js"}} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height={height} pageNumber={pageNumber} />
                    </Document>
                </div>
            </Paper>
        </>
    )
}