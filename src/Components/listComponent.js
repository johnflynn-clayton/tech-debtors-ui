import ListGroup from 'react-bootstrap/ListGroup';

const ListComponent = ({coords, setSelectedCoord, setAllCoords}) => {
  return (
    <div className='listContainer bg-gray-900 justify-end'>
        <ListGroup className='listContainer bg-gray-900 justify-end'>
            <ListGroup.Item action onClick={() => setAllCoords()}>
                    Select All
            </ListGroup.Item>
            {
                coords.map((item, key) => {
                    return(
                    <ListGroup.Item key={key} action onClick={(event) => setSelectedCoord(key, event.target)}>
                        Id({key}) Latitude({item.latitude}) Longitude({item.longitude})
                    </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    </div>
  );
}

export default ListComponent;

