const Map = ({map}) => {
    return ( 
        <div className="map">
            {map.map(item_img => (
                <img src={item_img.image}/>
            ))}
        </div>
     );
}
 
export default Map;