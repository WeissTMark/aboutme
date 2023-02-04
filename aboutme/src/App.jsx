import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import {ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: 'lucida',
        fontSize: 16
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#54ebfc',
        },
        secondary: {
            main: '#0585cb',
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