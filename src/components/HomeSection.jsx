import { useEffect,useState } from "react";
import Card from "./Card";
import axios from "axios";
import styles from './homesection.module.css';
function HomeSection({d1}) {
    
    
    return ( 
        <>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"20px"}} className={styles.container}>
        {
                
            d1.map((item,idx)=>{
                
                return  <Card key={idx} data1={item}/>
            })
        }
        </div>
        </>
     );
}

export default HomeSection; 