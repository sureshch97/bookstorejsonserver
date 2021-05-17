
import React ,{useState}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize'
import {addcontact} from '../../actions/contactactions'

const Contact = ({addcontact})=> {

    const [Name , setName] = useState('');
    const [Email , setEmail] = useState('');
    const [contact , setcontact] = useState('');

    const onsubmit=(e)=>{
        e.preventDefault();

        if(Name === '' || Email=== '' || contact === '' ){
            M.toast({html:'Please fill all fields'});
        }else{

            const  newContact={
                Name,
                Email,
                contact
            }
            addcontact(newContact);
            
            M.toast({html:'Thank You for Contacting us'});

        
        }
    }
    return (
        <div>

           <h1>Contact us</h1>

           <form onSubmit={onsubmit}>

               <div className="form-control">

                   <label>Name</label>

                   <input type="text" 
                   onChange={e=>setName(e.target.value)} required/>

                   <label>Email</label>

                   <input type="email"
                    onChange={e=>setEmail(e.target.value)} required/>

                   <label>what do you want to contact us</label>
                   <input type="text" 
                   onChange={e=>setcontact(e.target.value)}/>

                   <div>
                       <button type="submit" className="btn btn-primary btn-block">submit</button>
                   </div>

               </div>

           </form>

        </div>
    )
};
Contact.propTypes={

    addcontact:PropTypes.func.isRequired,
}
export default connect(null ,{addcontact})(Contact);
