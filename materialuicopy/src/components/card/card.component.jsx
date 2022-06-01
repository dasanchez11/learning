import React, { useState} from 'react';
import {Avatar, Card, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core';

import {resoucesUrl} from '../../projects'

const useStyles = makeStyles({
    card: {
        backgroundColor: 'white',
        backgroundImage: `url()`,
        height: '40vh',
        backgroundSize: 'cover',
        '&:hover': {
            cursor: 'pointer',
        
        }
    }
})


const CardComponent = ({project}) => {
    const classes = useStyles();
    const {resources,name,website, previewUrl} = project
    const [over, setOver] = useState(false);
    const onMouseOver =  () => {
        setOver(true)
    }
    const onMouseLeave = () =>{
        setOver(false)
    }

    const handleClick = (website) => {
        window.open(website)
        
    }
    return (
        <div style={{height: '40vh',marginBottom: '5px', marginRight:'5px'}} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={() => handleClick(website)}>
          <Card className={classes.card} style={{backgroundImage: `url(${previewUrl})`}} >
              <CardMedia 
              component='img'
               
               style={{widh: '100%'}}>

              </CardMedia>
              {
                over ? 
                <> 
                <div style={{height: '40vh', backgroundColor: `rgb(255,255,255,0.7)`, display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                    <CardContent style={{paddingBottom: '1px'}}>
                        <Typography variant='h3' >
                            {name}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
                        {resources.map((resource, idx) => {
                            
                            return (
                                <Avatar key={idx} alt={resource.name} src={resoucesUrl[resource]}></Avatar>
                            
                            )
                        })}
                        </div>
                    </CardContent>
                </div>
                </> : ""
              }
              
          </Card>
        </div>
    )
}


export default CardComponent