import TrimbleMaps from '@trimblemaps/trimblemaps-js';

const CreateMap = ({selectedCoords}) => {
  TrimbleMaps.APIKey = "135A1AAD18397046ABFCD5564BE3417B";

  const myMap = new TrimbleMaps.Map({
    container: "myMap",
    center: new TrimbleMaps.LngLat(-95, 35),
    zoom: 3,
    Regions: TrimbleMaps.Common.Region.NA
  });

  if(selectedCoords.length > 0){
    selectedCoords.map((item, key) => (
      myMap.on('load', function() {
        console.log(item);
        var pointName = "point" + key.toString();
          var point = {
            type: 'FeatureCollection',
            features:[
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [item.longitude, item.latitude]
                }
              }
            ]
          };
    
          myMap.addSource(pointName, {
            type: 'geojson',
            data: point
          });
    
          myMap.addLayer({
            'id': pointName,
            'source': pointName,
            'type': 'circle',
            'paint': {
              'circle-color': "blue",
              'circle-radius': 7
            }
        });
      })
    ))
  }
}

export default CreateMap;