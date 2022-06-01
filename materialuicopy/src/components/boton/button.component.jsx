import React from 'react';
import { Button,makeStyles, Typography,} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    boton: {
        borderRadius:'30px',
        background: 'black',
        color: 'white',
        borderColor: 'white'
    },
    texto: {
        fontSize: '0.875rem',
        textTransform: 'none',
        color:'white'
    }

}))



const CustomButton = ({text}) =>{
    const classes = useStyles();
    return( 
        <Button className={classes.boton} variant="outlined" >
            <Typography variant='subtitle2'  className={classes.texto}>
                {text}
            </Typography>
        </Button>
    )

}

export default CustomButton

