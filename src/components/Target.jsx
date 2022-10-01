const Target = ({ target }) => {
    return (
        <div className="target-block" style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px, 50px, 50px, 50px",
            backgroundColor: "antiquewhite"
        }}>
            <img src={target.image} style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                paddingRight: "50px"
            }}/>

            <h1 className="target-name">{target.name}</h1>
            <h3 className="target-price">{target.price}</h3>
            <h5 className="target-location">{target.location}</h5 >
        </div>
    );
}

export default Target;