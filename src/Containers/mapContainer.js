import {  useEffect, useState } from 'react';
import ListContainer from '../Containers/listContainer';
import MapComponent from '../Components/mapComponent';
import CreateMap from '../Functions/createMap';

const MapContainer = () => {
    const [coords] = useState([
        {
        Id: 1,
        latitude: 35,
        longitude: -83
        },
        {
        Id: 2,
        latitude: 35,
        longitude: -85
        },
        {
          Id: 3,
          latitude: 35,
          longitude: -90
        }
    ])
  
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
        <ListContainer coords={coords} setSelectedCoords={setSelectedCoords} />
        <MapComponent/>
    </>
    )
  }

  export default MapContainer;