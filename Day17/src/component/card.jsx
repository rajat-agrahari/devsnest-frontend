
const Card =(props) =>{
    const {title,caloies}=props;
    return(
        <div className="container">
           <div className="card">
               <h3 className="title">{title}</h3>
               <p className="para">You have consumed {caloies} cals today.</p>
           </div>
        </div>
    )
}

export default Card;