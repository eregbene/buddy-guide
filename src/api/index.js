import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlacesData = async ( sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL,{
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,

    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': 'cbf57fff3fmsh8390d4fab70974dp1a9d6cjsn7889d7e29ba7',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
});

    return data;
} catch (error) {

}
}