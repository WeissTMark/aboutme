import React from 'react';
import AppBar from '@mui/material/AppBar';
import {IconButton, Toolbar, Button, Typography, Drawer} from '@mui/material';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const nav = useNavigate();
    const [drawer, setDrawer] = React.useState(false)
    const location = useLocation()
    let page = "About Me"
    if (location.pathname === '/resume') {
        page = "Résumé"
    }
    if (location.pathname === '/classes') {
        page = "Classes"
    }
    if (location.pathname === '/projects') {
        page = "Projects"
    }

    const openDrawer = () => {
        setDrawer(true)
    }
    const closeDrawer = () => {
        setDrawer(false)
    }

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h5' sx={{m: 2}}>
                    {page}
                </Typography>

                <Drawer anchor={'left'} open={drawer} onClose={closeDrawer}>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav("/")}}>About Me</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/resume')}}>Résumé</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/projects')}}>Projects</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/classes')}}>Classes</Button>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}