import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Avatar} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    index: {
      marginRight: theme.spacing(1),
      color: 'white'
    },
    contacenos:{
      marginLeft:'0.5rem',
      marginRight:'0.5rem'
    },
    toolbar:{
      marginTop: '1%',
      marginLeft: '10%',
      marginRight: '10%',
      justifyContent: 'center'
    },
    header: {
      color: 'white',
      background: 'white'
    },
    indexChange: {
      marginRight: theme.spacing(1),
      color: 'black'
    }
  
  }));

const Header = () => {
    const classes = useStyles();
    const [yval, setYval] = useState(false)

    const handleScroll = () =>{
      if (window.scrollY>80) {
        setYval(true)
      } else {
        setYval(false)
      }
      
    }


    useEffect(()=> {
      window.addEventListener('scroll', handleScroll)

      return ()=> window.removeEventListener('scroll', handleScroll)
    },[])



    return(
        <AppBar  elevation={ yval ? 1 : 0} color='transparent' className={yval ? classes.header : ''} >
        <Toolbar className={classes.toolbar} >
          <Box className={yval? classes.indexChange : classes.index} style={{display: 'flex'}}>
          <Avatar variant='h5'>
              DS
            </Avatar>
            
            <Typography style={{marginTop: '6px', marginLeft: '10px'}} variant='h5'>
              Diego Sánchez 
            </Typography>
          </Box>
          
        </Toolbar>

        
      </AppBar>

    );
};

export default Header;

