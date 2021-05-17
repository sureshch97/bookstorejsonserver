import {
    ADD_CONTACT,
    CONTACT_ERROR
} from './types'


export const addcontact=(contact)=> async dispatch=>{

    try {
        

        const res = await fetch('/contacts' , {
            method:'POST',
            body:JSON.stringify(contact),
            headers:{
                'Content-type':'application/json'
            }
    
        });
        const data = await res.json();

        console.log(data);
    
        dispatch({
            type:ADD_CONTACT,
            payload:data
        });
    } catch (error) {

        dispatch({
            type:CONTACT_ERROR,
            payload:error

        })
        
    }

  
}