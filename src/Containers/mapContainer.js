import {  useEffect, useState } from 'react';
import ListContainer from '../Containers/listContainer';
import MapComponent from '../Components/mapComponent';
import CreateMap from '../Functions/createMap';

const MapContainer = () => {
    const [coords, setCoords] = useState([{'id': "123123123", 'homeID': '123123', 'latitude': 35, 'longitude': -100}])
  const [selectedCoords, setSelectedCoords] = useState(coords);

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  useEffect(() => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const getLocation = (token) => {
      let headerss = new Headers();
      headerss.append('Content-Type', 'application/json');
      headerss.append('Accept', 'application/json');
      headerss.append('Authorization', `Bearer ${token}`)
      fetch(`https://localhost:44348/api/LocationRecord`,{
        method: 'get',
        headers: headerss,
      })
      .then(response => response.json())
      .then(response => {
        setCoords(response)
      })
    }

    fetch(`https://localhost:44348/api/Authorization/token/316892ab-a388-417f-b843-e567c8db5098`,{
      method: 'get',
      headers: headers,
    })
    .then(response => response.json())
    .then(response => {
      getLocation(response.token)
    })
  }, [])

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