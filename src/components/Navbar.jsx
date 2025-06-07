import { useState } from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };
     const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            position: "sticky",
            top: "10px",
            zIndex: "3",
            margin: "15px",
            borderRadius: "10px"
        }}>
            <p style={{fontWeight: "normal", fontSize: "30px", cursor: "pointer"}}><Link to="/" style={{textDecoration:"none",color:"black"}}>Tasoty</Link></p>
            
            <div className={styles.navContainer}>
                
                <div 
                    className={styles.hamburger} 
                    onClick={toggleMenu}
                    style={{ zIndex: 101 }} 
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <nav className={isMenuOpen ? styles.navActive : ''}>
                    <ul className={`${styles.navigation} ${isMenuOpen ? styles.showMenu : ''}`}>
                        <li><Link to="/" className={styles.l1} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/faq" className={styles.l1} onClick={closeMenu}>FAQ</Link></li>
                        <li><Link to="/about" className={styles.l1} onClick={closeMenu}>About</Link></li>
                        <li><Link to="/contact" className={styles.l1} onClick={closeMenu}>Contact</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;