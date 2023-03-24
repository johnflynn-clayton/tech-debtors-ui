import {  useEffect, useState } from 'react';
import ListContainer from '../Containers/listContainer';
import MapComponent from '../Components/mapComponent';
import CreateMap from '../Functions/createMap';

const MapContainer = () => {
    const [coords] = useState([  {    "Id": 1,    "latitude": 35,    "longitude": -83  },  {    "Id": 2,    "latitude": 35,    "longitude": -85  },  {    "Id": 3,    "latitude": 35,    "longitude": -90  },  {    "Id": 4,    "latitude": 34,    "longitude": -80  },  {    "Id": 5,    "latitude": 36,    "longitude": -88  },  {    "Id": 6,    "latitude": 33,    "longitude": -82  },  {    "Id": 7,    "latitude": 36,    "longitude": -82  },  {    "Id": 8,    "latitude": 34,    "longitude": -90  },  {    "Id": 9,    "latitude": 32,    "longitude": -88  },  {    "Id": 10,    "latitude": 38,    "longitude": -77  },  {    "Id": 11,    "latitude": 37,    "longitude": -80  },  {    "Id": 12,    "latitude": 39,    "longitude": -76  },  {    "Id": 13,    "latitude": 36,    "longitude": -79  },  {    "Id": 14,    "latitude": 34,    "longitude": -84  },  {    "Id": 15,    "latitude": 36,    "longitude": -90  },  {    "Id": 16,    "latitude": 33,    "longitude": -81  },  {    "Id": 17,    "latitude": 31,    "longitude": -85  },  {    "Id": 18,    "latitude": 32,    "longitude": -84  },  {    "Id": 19,    "latitude": 40,    "longitude": -74  },  {    "Id": 20,    "latitude": 41,    "longitude": -72  },  {    "Id": 21,    "latitude": 42,    "longitude": -71  },  {    "Id": 22,    "latitude": 45,    "longitude": -89  },  {    "Id": 23,    "latitude": 47,    "longitude": -122  },  {    "Id": 24,    "latitude": 37,    "longitude": -122  },  {    "Id": 25,    "latitude": 45,    "longitude": -123  }]
    )
  
  const [selectedCoords, setSelectedCoords] = useState(coords);
    /*
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            fetch(`https://www.weatherapi.jake-dev.com/weatherinfo`,{
              method: 'get',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
            })
              .then(response => response.json())
              .then(coords => {
              setCoords(coords)
            })
            .catch(error=> console.log(error))
          }, (error) => {alert(error.message.toString())})
    },[])
    */
        useEffect(() => {
            CreateMap({selectedCoords})
        }, [selectedCoords])

    return(
    <>
        <MapComponent/>
        <div class="px-2 py-1 "><ListContainer coords={coords} setSelectedCoords={setSelectedCoords} /></div> 
        
    </>
    )
  }

  export default MapContainer;