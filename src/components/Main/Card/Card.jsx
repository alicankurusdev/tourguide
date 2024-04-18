import  "./Card.scss"


const Card =({ item })=>{
 console.log(item)
 const {title,desc,image}=item
    return(
        
        <div className="card">
            <h3 className="title">{title}</h3>
            <div className="card-image">
                <img src={image} width="200px" alt="card-image"/>
            </div>
            <p className="card-info">{desc}</p>
        </div>
    )
}

export default Card;