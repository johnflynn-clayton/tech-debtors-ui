import TrimbleMaps from '@trimblemaps/trimblemaps-js';

const CreateMap = ({selectedCoords}) => {
  TrimbleMaps.APIKey = "135A1AAD18397046ABFCD5564BE3417B";

  const myMap = new TrimbleMaps.Map({
    container: "myMap",
    center: new TrimbleMaps.LngLat(-85, 35),
    zoom: 4,
    Regions: TrimbleMaps.Common.Region.NA
  });

  if(selectedCoords.length > 0){
    selectedCoords.map((item, key) => (
      myMap.on('load', function() {
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
            /*
            'type': 'circle',
            'paint': {
              'circle-color': "blue",
              'circle-radius': 7
            }
            */
            'type': 'symbol',
            'layout': {
              'icon-image': 'flag-outline-green',
              'icon-allow-overlap': true,
              'text-offset': [0,1],
              'text-anchor': 'top',
              'text-font': ['Roboto Regular'],
              'text-optional': true,
              'text-field': [
                'format',
                `${item.Id}`, {'font-scale': 0.9, 'text-color': '#333333'},
              ]
            }
        });
      })
    ))
  }
}

export default CreateMap;