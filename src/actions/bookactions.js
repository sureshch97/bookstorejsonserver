import {

    GET_BOOKS,
    ADD_BOOK,
    GET_COMMENTS,
    COMMENT_ERROR,
    BOOKS_ERROR,
    SET_LOADING,
    SET_ALERT,
    GET_BOOK,
} from './types'
import {v4 as uuid} from 'uuid';

//GET BOOKS
export const getbooks =() => async dispatch =>{

    try {
        

        const res = await fetch('/books');
        const data = await res.json();
        
        dispatch({
            type:GET_BOOKS,
            payload:data
        })

    } catch (error) {

        dispatch({
            type:BOOKS_ERROR,
            payload:error
        })
        
    }

   
};

// //GET COMMENTS

export const getcomments =() => async dispatch =>{

    try {
        

        const res = await fetch('/comments');
        const data = await res.json();
        
        
       
    
        dispatch({
            type:GET_COMMENTS,
            payload:data
        })

    } catch (error) {

        dispatch({
            type:COMMENT_ERROR,
            payload:error
        })
        
    }

   
};

// GET BOOK BY ID 
export const getbookbyid = (bookID)=> async dispatch=>{
   
    try {
        
        const res = await fetch(`/books/${bookID}`);
        const data = await res.json();

        
        
        dispatch({

            type:GET_BOOK,
            payload:data
        })
    } catch (error) {

       dispatch({
        type:BOOKS_ERROR,
        payload:error
       }) 
        
    }


}

//ADD BOOK
export const addBook = (book) => async dispatch=>{

    try {
        
        setloading();

        const res = await fetch('/books' , {
            method:'POST',
            body:JSON.stringify(book),
            headers:{
                'Content-type':'application/json'
            }

        });
        const data = await res.json();

        console.log(data);

        dispatch({
            type:ADD_BOOK,
            payload:data
        });

    } catch (error) {

        dispatch({
            type:BOOKS_ERROR,
            payload:error
        })
        
    }};

//ADD COMMENT

export  const Addcomment = (comment , bookID)=> async dispatch=>{

    try {
        

         const Book = await fetch(`/books/${bookID}`)
         const Bookdata = await Book.json();
        const newcomment = {
            id:uuid(),
            Name:comment.Name,
            Comment:comment.Comment

        }
         Bookdata.comments.unshift(newcomment) 
        const res = await fetch(`/books/${bookID}` , {
            method:'PUT',
            body:JSON.stringify({
                Name:Bookdata.Name,
                category: Bookdata.category,
                label: Bookdata.label,
                prize:  Bookdata.prize,
                description:  Bookdata.description,
                image: Bookdata.image, 
                comments:Bookdata.comments
            }),
            
            headers: {
                'Content-Type':'application/json'
            }
           
          });
          const data = await res.json();

        

          
          
          dispatch({
              type:GET_BOOK,
              payload: data
          });
          
   } catch (error) {

       dispatch({
           type:COMMENT_ERROR,
           payload:error
       })
        
    }
};

//SET LOADING
    export const setloading =()=>{

        return{
            type:SET_LOADING
        }

    }

//SET ALERT
    export const setAlert =()=>{

        return{
            type:SET_ALERT
        }

    }
  

   




