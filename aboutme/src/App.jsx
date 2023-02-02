import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import {ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4dd0e1',
        },
        secondary: {
            main: '#b388ff',
        },
    },
});

function App() {
    return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
    );
}

export default App;