import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import Classes from './pages/classes'
import Resume from './pages/resume'
import Projects from './pages/projects'
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#4527a0',
        },
        secondary: {
            main: '#26a69a',
        },
        error: {
            main: '#ff3d00',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/classes" element={<Classes/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;