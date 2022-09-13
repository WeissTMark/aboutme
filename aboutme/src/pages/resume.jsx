import React from "react";
import Header from "../tools/bar";
import Footer from "../tools/footer";
import { Document, Page } from 'react-pdf';
import { Paper } from '@mui/material';
import resume from '../files/Weiss-Resume-Sept2022.png'
import resumeBig from '../files/resumebig.png'
import styled from "styled-components"
import { useRef, useState } from "react";
import "./resume.css"

//Most of this code was written by grepsoft-zz using the example from https://github.com/grepsoft-zz/zoom-on-hover

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  :hover {
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
  }
`;

const Image = styled.img.attrs((props) => ({
    src: props.source
}))``;

const Target = styled(Image)`
  position: absolute;
  left: ${(props) => props.offset.left}px;
  top: ${(props) => props.offset.top}px;
  opacity: ${(props) => props.opacity};
`;


export default function Resume() {
    const height = window.innerHeight
    const sourceRef = useRef(null);
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const [opacity, setOpacity] = useState(0);
    const [offset, setOffset] = useState({ left: 0, top: 0 });

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const handleMouseMove = (e) => {
        const targetRect = targetRef.current.getBoundingClientRect();
        const sourceRect = sourceRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
        const yRatio =
            (targetRect.height - containerRect.height) / sourceRect.height;

        const left = Math.max(
            Math.min(e.pageX - sourceRect.left, sourceRect.width),
            0
        );
        const top = Math.max(
            Math.min(e.pageY - sourceRect.top, sourceRect.height),
            0
        );

        setOffset({
            left: left * -xRatio,
            top: top * -yRatio
        });
    };



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
                <div className="App">
                    <Container
                        ref={containerRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <Image ref={sourceRef} alt="source" height={height} source={resume} />
                        <Target
                            ref={targetRef}
                            alt="target"
                            opacity={opacity}
                            offset={offset}
                            source={resumeBig}
                        />
                    </Container>
                </div>
            </Paper>
            <Footer />
        </>
    )
}