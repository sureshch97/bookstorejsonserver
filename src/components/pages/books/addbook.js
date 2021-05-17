import React , {useState} from 'react'
import {addBook} from '../../../actions/bookactions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize'


 const  Addbook=({addBook}) =>{

  const [Name , setName] = useState('');
  const [category , setcategory] = useState('');
  const [label , setlabel] = useState('');
  const [price , setprice] = useState('');
  const [description , setdescription] = useState('');

  const onsubmit=()=>{
      if(Name === '' || category === '' || label === '' || price === '' || description === ''){

         M.toast({html: 'Please Fill in all Fields'})
          
      }
      else{
        const newBook = {
            Name,
            category,
            label,
            price,
            description,
            comments:[]
        }
       
        addBook(newBook);
        console.log(newBook)

        M.toast({html:`Book Added `})
      }
     
 }

    return (
        <div className="card card-type">

          <h3>Add a Book</h3>

          <form onSubmit={onsubmit}>

            <div className="form-control my-1 p">

              <label>Name:</label>
              <input type="text"
               onChange={e=> setName(e.target.value)}
               required/>

              <label>Category:</label>
              <input type="text" 
              onChange={e=> setcategory(e.target.value)}
              required/>

              <label>label:</label>
              <input type="text"
              onChange={e=> setlabel(e.target.value)}
              required/>

              <label>Price:</label>
              <input type="text"  
              onChange={e=> setprice(e.target.value)}
              required/>

              <label>Description:</label>
              <textarea type="text"
               onChange={e=> setdescription(e.target.value)}
               required/>
            </div>

            <button className="btn btn-primary btn-block">Submit</button>

          </form>
       
        </div>
    )
};
Addbook.propTypes={
  addBook:PropTypes.func.isRequired,
}
export default connect(null , {addBook})(Addbook)
