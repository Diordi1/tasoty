import styles from './card.module.css';

function Card(props) {
    console.log(props)
    return ( 
        <div className={styles.card}>
            {/* "image": "https://cdn.dummyjson.com/recipe-images/1.webp", */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",height:"125px",marginTop:"10px"}}>

            <img src={props.data1.image} width={160} height={140} style={{objectFit:"cover",display:"block"}}alt="img"></img>
            <div className={styles.button}>i</div>
            </div>
            <p style={{fontWeight:"bold",}}>{props.data1.name}</p>
            {/* <p>Ingrediants : Tomato Sauce,Olive Oil</p> */}
            <p style={{display:'flex',justifyContent:"space-between",fontWeight:"normal"}}><span style={{fontWeight:"bold"}}>Difficulty:</span><span style={{color:props.data1.difficulty=="Easy"?"green":props.data1.difficulty=="Medium"?"#FEBE10":"red"}}>{props.data1.difficulty}</span></p>
            <div className={styles.rating}>

            <p style={{fontWeight:"bold"}}>4.5 <img src="image.png" style={{width:"13px",height:"13px"}}></img></p>
            <p style={{fontWeight:"normal"}}>{props.data1.tags[props.data1.tags.length-1]}</p>
            </div>
        </div>
     );
}

export default Card;