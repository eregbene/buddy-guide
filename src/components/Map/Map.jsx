import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/';

import useStyles from './styles.js';
import { getPlacesData } from '../../api/index.js';

const Map = ({setcoordinates, setBounds,coordinates}) => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAv6WsvAU4YzrqHgtSF9iPvYxZzo6WU3Nc' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={""}
        onChange={(e) => {
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
     
      </GoogleMapReact>
    </div>
  );
};

export default Map;