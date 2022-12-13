import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/*
  This function or page is suppose to make an api request on load with passed Category and after having the data from data base we are going to Show that perticular UI Component.
*/

function CategoryPage(){
    const Category = useParams();
    useEffect(()=>{
      
    },[])
    console.log(Category);
    return <>
        <h1>Data by Category</h1>
    </>
}

export {CategoryPage};
