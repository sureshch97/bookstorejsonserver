 import React , {Fragment, useEffect} from 'react'
 import { Link } from 'react-router-dom'
 import {connect} from 'react-redux'
 import Booksitem from './bookItem'

 import {getbooks } from '../../../actions/bookactions'
 import PropTypes from 'prop-types'
// import M from 'materialize-css/dist/js/materialize'


const Books = ({ books:{books},getbooks })=> {

    useEffect(()=>{

        getbooks();
        
       // eslint-disable-next-line
       
    },[getbooks]);
   
   
 
    return (
      <Fragment>
        
        <Link to="/addbook"  className="btn btn-block btn-primary text-center py-3">Add Book</Link>
           <div className="container">
              <div className="grid">
           
              {books!==null && books.map(book=> <Booksitem book={book} key={book.id}/>)}
             </div>
           </div>
           
          

          
       </Fragment>
       
    )
};

 Books.propTypes={
    books: PropTypes.object.isRequired,
    getbooks: PropTypes.func.isRequired,
    
    
 }
 const mapStateToProps = state =>({
      books : state.book,
      
 });
 export default connect(mapStateToProps, {getbooks})(Books);



