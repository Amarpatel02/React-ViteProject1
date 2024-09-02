



const ReusableCard = ({ data = [] }) => {
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            {
                data.map((each) => {
                    return (
                        <div className="card" style={{ width: "22rem" }}>
                            <img src={each.image} className="card-img-top" alt="..." style={{ height: "200px", width: "18rem", marginLeft:"2rem"}}  />
                            <div className="card-body">
                                <h5 className="card-title">{each.title}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ReusableCard
