import styles from "./button.module.css";
function BottomNavigation({currentPage, setCurrentPage}) {
    return ( 
        <div style={{display:"flex",width:"100%",margin:"12px",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",gap:"1rem"}}>
            <p className={styles.btn1}>&larr;</p>
            <p className={styles.btn1}>1</p>
            <p className={styles.btn1}>2</p>
            <p className={styles.btn1}>3</p>
            <p className={styles.btn1}>&rarr;</p>
        </div>
            </div>
     );
}

export default BottomNavigation;