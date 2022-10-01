const Target = ({target}) => {
    return ( 
        <div className="target-block">
            <img src={target.image} />
            <h1 className="target-name">{target.name}</h1>
            <h3 className="target-price">{target.price}</h3>
            <h5 className="target-location">{target.location}</h5>
        </div>
     );
}
 
export default Target;