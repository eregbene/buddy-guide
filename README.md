# Welcome to Buddy Guide 👋

<img src="src\assets\buddy-guide.gif"/>

A Portfolio Project For ALX Cohort9 using React,RapidAPI's TravelAdvisor API and Google Maps API

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/eregbene" target="_blank">
    <img alt="Twitter: eregbene" src="https://img.shields.io/twitter/follow/eregbene.svg?style=social" />
  </a>
</p>

### ✨ [Live Preview](https://eregbene.tech/)

## Install
Run the Command to Install all dependencies.
```sh
npm install @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react
```

## Usage

Create API Credentials/Keys from the following Providers

* [Google Maps](https://console.cloud.google.com/) "Enabling the Specific Services: Maps Javascript API & Places API"
* [Travel Advisor (Rapid API)](https://rapidapi.com/apidojo/api/travel-advisor/)

Create a `.env` file in your root directory, create the variables as seen below filling in your API Keys appropriately
```sh
REACT_APP_GOOGLE_MAPS_API_KEY=GOOGLE-MAP-APIKEY-HERE
REACT_APP_RAPID_API_TRAVEL_API_KEY=RAPID-API-TRAVEL-HERE
```
Locate and Append the Google Map API Key onto the Script Tag in the `index.html` file as seen below
```sh
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=GOOGLE-MAP-APIKEY-HERE"></script>
```
Now run the command to start the development server.
```sh
npm run dev
```
Your project should start running on `http://localhost:3000`

## Author

👤 **Eregbene benedict elaye**

* LinkedIn: [@eregbene](https://www.linkedin.com/in/eregbene/)

## Show your support

Give a ⭐️ if this project helped you!

