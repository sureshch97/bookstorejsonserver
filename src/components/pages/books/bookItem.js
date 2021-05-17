import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'




const Booksitem = ({book}) => {

   
    return (
        
        <div className="card" key={book.id}>

                 
                   <Link to={`/singlebook/${book.id}`}>
                    <div className="card-image">

                      <img src={`http://localhost:5000${book.image}`} alt="..." height="350"/>
                    
                    </div>

                    <span className="card-title strong">{book.Name}</span>
                    </Link>
                </div>
            
      
    )
}

Booksitem.propTypes = {
    book:PropTypes.object.isRequired
}

export default connect(null )(Booksitem)





