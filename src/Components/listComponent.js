import ListGroup from 'react-bootstrap/ListGroup';

const ListComponent = ({coords, setSelectedCoord, setAllCoords}) => {
  return (
    <div className='listContainer'>
        <ListGroup style={{width: '25%'}}>
            <ListGroup.Item action onClick={() => setAllCoords()}>
                    Select All
            </ListGroup.Item>
            {
                coords.map((item, key) => {
                    return(
                    <ListGroup.Item key={key} action onClick={(event) => setSelectedCoord(key)}>
                        Id({item.Id}) Latitude({item.latitude}) Longitude({item.longitude})
                    </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    </div>
  );
}

export default ListComponent;