



const ReusableCard = ({ data = [] }) => {
    return (
        <>
            {
                data.map((each) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={each.image} className="card-img-top" alt="..." height={200} width={100}/>
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

        </>
    )
}

export default ReusableCard
