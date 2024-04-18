import  "./Card.scss"


const Card =({item})=>{
    return(
        <div className="card">
            <h3 className="title">title</h3>
            <div className="card-image">
                <img src="" alt="card-image"/>
            </div>
            <p className="card-info">card info</p>
        </div>
    )
}

export default Card;