import './App.css';
import Header from './components/header/header.component';


import {Grid} from '@material-ui/core';


import CardComponent from './components/card/card.component'
import Projects from './projects'
import React from 'react';




function App() {
  

  return (
    
    <div className="App" style={{backgroundColor:'#05193f', color: 'black', height: 'auto'}}>
      <Header/>
      <Grid container style={{paddingTop: '100px'}} >
        
        {Projects.map((project,idx)=> 
        <React.Fragment key ={idx}>
          {idx % 2 === 0 ? 
          <>
          <Grid  item xs={false} sm={false} md={1} />
          <Grid   item xs={12} sm={6} md={5}>
            <CardComponent  key={project.id}  project={project} >{project.name}</CardComponent>
          </Grid>
          </>
          :
          <>
            <Grid item xs={12} sm={6} md={5}>
              <CardComponent key={project.id}  project={project} >{project.name}</CardComponent>
            </Grid>
            <Grid  item xs={false} sm={false} md={1} />
           </>}
           </React.Fragment>
        )}
      </Grid>
    </div>

    
  );
}

export default App;
