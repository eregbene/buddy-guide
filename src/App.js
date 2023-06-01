import React, { useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App =() => {
    const  [places, setPlaces] = useState([]);
    const  [coordinates, setcoordinates ] = useState({});
    const  [bounds, setBounds] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}})=>{
            setcoordinates({lat:latitude,lng: longitude});
        }
        )

    },[]);
    

    useEffect(() => {
        console.log(coordinates,bounds);
        getPlacesData(bounds.sw, bounds.ne)
           .then((data) => {
              console.log(data);
                setPlaces(data); 
            })


    },[coordinates, bounds] );
  
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map 
                    setcoordinates={setcoordinates}
                    setBounds={setBounds}
                    coordinates ={coordinates}
                    places={places}
                
                
                />

            </Grid>
       </Grid>
            
        </>
    );
}

export default App;