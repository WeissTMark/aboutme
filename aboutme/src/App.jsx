import {
    HashRouter as Router,
      Routes,
      Route} from "react-router-dom";
  import Home from './pages/home';
  import Classes from './pages/classes'
  import Resume from './pages/resume'
  import Projects from './pages/projects'
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import './App.css';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#5ed6b4',
        light: '#6de8c5',
        dark: '#44b393',
        contrastText: '#000000'
      },
      secondary: {
        main: '#21154d',
        light: '#2f1f69',
        dark: '#130b30',
        contrastText: '#FFFFFF'
      },
      background: {
        paper: '#616161',
        default: '#616161'
      }
    },
    typography: {
        fontFamily: [
            'Arial',
        ]
    }
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