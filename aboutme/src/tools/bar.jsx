import React from 'react'
import {Alert, AppBar, Button, Drawer, IconButton, Menu, MenuItem, Snackbar, Toolbar, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useLocation, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';

const Bar = () => {
    const [phoneAnchor, setPhoneAnchor] = React.useState(null);
    const [mailAnchor, setMailAnchor] = React.useState(null);
    const [snackVal, setSnackVal] = React.useState("")
    const [snackOpen, setSnackOpen] = React.useState(false)
    const phoneOpen = Boolean(phoneAnchor);
    const mailOpen = Boolean(mailAnchor);
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

    const handlePhoneClick = (event) => {
        setPhoneAnchor(event.currentTarget);
    };
    const handlePhoneClose = () => {
        setPhoneAnchor(null);
    };

    const handleMailClick = (event) => {
        setMailAnchor(event.currentTarget);
    };
    const handleMailClose = () => {
        setMailAnchor(null);
    };

    function copyToClip(val) {
        setSnackVal(val)
        handleMailClose()
        handlePhoneClose()
        navigator.clipboard.writeText(val).then(() => {
            setSnackOpen(true)
        })
    }

    const closeSnack = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false)
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnack}
        >
            <CloseIcon fontSize="small"/>
        </IconButton>
    )

    return (

        <AppBar sx={{m: 0, p: 0}}>
            <Toolbar disableGutters>
                <IconButton color="inherit" aria-label="menu" onClick={openDrawer}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="a" sx={{
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                    {page}
                </Typography>
                <Typography sx={{flexGrow:1}}/>
                <IconButton size="small" onClick={() => {
                    window.open("https://www.linkedin.com/in/mark-weiss-2018/")
                }}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
                <IconButton size="small" onClick={() => {
                    window.open("https://github.com/WeissTMark")
                }}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton size="small" onClick={handleMailClick}>
                    <EmailIcon fontSize="large"/>
                </IconButton>
                <IconButton size="small" onClick={handlePhoneClick} sx={{mr:4}}>
                    <PhoneIcon fontSize="large"/>
                </IconButton>
                <Menu
                    id="phoneMenu"
                    anchorEl={phoneAnchor}
                    open={phoneOpen}
                    onClose={handlePhoneClose}
                >
                    <MenuItem>
                        <Typography sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>(303)913-8658</Typography>
                        <IconButton size="small" onClick={() => {
                            copyToClip("(303)913-8658")
                        }}>
                            <ContentCopyIcon/>
                        </IconButton>
                    </MenuItem>
                </Menu>

                <Menu
                    id="mailMenu"
                    anchorEl={mailAnchor}
                    open={mailOpen}
                    onClose={handleMailClose}
                >
                    <MenuItem>
                        <Typography sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>weisstmark@gmail.com</Typography>
                        <IconButton size="small" onClick={() => {
                            copyToClip("weisstmark@gmail.com")
                        }}>
                            <ContentCopyIcon/>
                        </IconButton>
                    </MenuItem>
                </Menu>
                <Drawer anchor={'left'} open={drawer} onClose={closeDrawer}>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav("/")}}>About Me</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/resume')}}>Résumé</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/projects')}}>Projects</Button>
                    <Button sx={{m: 1, width: 250, fontSize: '1.2rem'}} onClick={() => {nav('/classes')}}>Classes</Button>
                </Drawer>
                <Snackbar open={snackOpen} autoHideDuration={6000} onClose={closeSnack}>
                    <Alert severity='success' onClose={closeSnack}>
                        {"'" + snackVal + "' Has been successfully copied to the clipboard."}
                    </Alert>
                </Snackbar>
            </Toolbar>
        </AppBar>
    )
}

export default Bar
