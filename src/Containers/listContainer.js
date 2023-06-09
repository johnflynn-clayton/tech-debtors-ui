import ListComponent from "../Components/listComponent";

const ListContainer = ({coords, setSelectedCoords}) => {

    const setSelectedCoord = (item, event) => {
      console.log(event);
        setSelectedCoords([coords[item]])
    }

    const setAllCoords = () => {
      setSelectedCoords(coords);
    }
    
  return (
    <ListComponent 
        coords={coords} 
        setSelectedCoord={setSelectedCoord}
        setAllCoords={setAllCoords}
    />
  );
}

export default ListContainer;