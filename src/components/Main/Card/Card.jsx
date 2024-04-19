import  "./Card.scss"


const Card =({ item })=>{
 console.log(item)
 const {title,desc,image}=item
    return(
        
        <div className="card">
            <h3 className="title">{title}</h3>
            <div className="card-image-container">
                <img src={image}  alt="card-img"/>
                <p className="card-info">{desc}</p>

            </div>
        </div>
    )
}

export default Card;