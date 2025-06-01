import { useState,useEffect } from 'react'

  import { ToastContainer, toast } from 'react-toastify';
import HomeSection from './HomeSection'
import Navbar from './Navbar'
import BottomNavigation from './BottomNavigation'
import axios from 'axios'
import styles from './button.module.css';
function TotalHome() {
     const [count, setCount] = useState(0)
  // let [page,setPage]=useState(0);
  // let [currentPage,setCurrentPage]=useState(1);
  let [ d1,setD1]=useState([]);
   const itemsPerPage = 10;
   let [page,setCurrentPage]=useState(10);
    // let[click,setClick]=useState({
    //   leftClick:0;
    //   rightClick
    // })
    let [skip,setSkip]=useState(0);
useEffect(()=>{
        
            console.log("useEffect called");
            //  const skipValue = (currentPage - 1) * itemsPerPage;
            // System.out.println(page);
            // console.log(page);

                
                axios.get(`https://dummyjson.com/recipes?limit=${itemsPerPage}&skip=${skip}`).then(
                    (res)=>{
                      console.log(res);

                        console.log(res.data.recipes);
                    setD1(res.data.recipes);
                    console.log(d1);
                    // setTotal(res.data.total);
                }).catch((err)=>{
                    console.log(err);
                }
            )
        
    

            
            
    },[skip, itemsPerPage])
    return (  
        <>
{/* <Navbar/> */}
    <HomeSection d1={d1}/>
    <ToastContainer/>
    <div style={{display:"flex",width:"100%",margin:"12px",justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex",gap:"1rem"}}>
                <p className={styles.btn1} onClick={()=>{
                  if(page<=10) {
                    toast.error("You are already on the first page");
                    return;
                  }
                  setSkip(skip-10);
                  setCurrentPage(page-10);
                }}>&larr;</p>
                
                <p className={styles.btn1}
                  onClick={()=>{
                    if(page>=50) {
                        toast.error("You are already on the last page");
                        return;
                    }
                    setSkip(skip+10);
                    setCurrentPage(page+10);

                  }}
                >&rarr;</p>
            </div>
                </div>
         
    </>

    );
}

export default TotalHome;