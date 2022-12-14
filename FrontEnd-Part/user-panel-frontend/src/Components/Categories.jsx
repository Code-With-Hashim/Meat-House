import React, { useState } from 'react';

function Categories(){
    const [data,setData] = useState([{
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"All"
    },{
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Curry Cuts"
    },
    {
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Boneless & Mince"
    },
    {
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Speciality Cuts"
    },
    {
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Combos"
    },
    {
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Ready to Cook"
    },
    {
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png",
        name:"Meat Masalas"
    }]);
    return <>
        <div style={{display:'flex',gap:"25px",borderBottom:"1px solid #e3e0e0",height:"70px"}}>
            {
                data&& data.map((ele)=>{
                    return <div style={{display:'flex',alignItems:'center',gap:"5px",fontSize:'small', fontWeight:"600", cursor:"pointer",color:'gray'}}>
                        <img src={ele.image} alt="image" style={{borderRadius:"50%"}} width="30px"/>
                        {ele.name}
                    </div>
                })
            }
        </div>
    </>
}


export  {Categories};