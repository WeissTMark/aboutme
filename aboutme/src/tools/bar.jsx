import React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();
    return (
      <AppBar position='static'>
        <Toolbar>
          <Button sx={{m: 1, ml: 0, fontSize: '1.2rem', display: 'block'}} color='secondary' onClick={() => {nav("/")}}>About Me</Button>
          <Button sx={{m: 1, fontSize: '1rem', display: 'block'}} color='secondary' onClick={() => {nav('/resume')}}>Résumé</Button>
          <Button sx={{m: 1, fontSize: '1rem', display: 'block'}} color='secondary' onClick={() => {nav('/projects')}}>Projects</Button>
          <Button sx={{m: 1, fontSize: '1rem', display: 'block'}} color='secondary' onClick={() => {nav('/classes')}}>Classes</Button>
        </Toolbar>
      </AppBar>
    );
}