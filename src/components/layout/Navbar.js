import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


 const Navbar = () => {
    return (
     <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 
            <div className="collapse navbar-collapse ">

                <div className="navbar-nav">

                       <Link className="navbar-brand blue-text"  to="/">Book Store</Link>
                
                       <Link to="/" className="nav-link black-text text-darken-2">Home</Link>
                        
                        
                        <Link to="/about" className="nav-link black-text text-darken-2">About</Link>
                    
                    
                        <Link to="/contact" className="nav-link black-text text-darken-2">Contact-us</Link>
               
               </div>
            
           </div>
               
            
        </nav>
           
     </Fragment>
             
    
     
       
       
    )
}
export default Navbar



