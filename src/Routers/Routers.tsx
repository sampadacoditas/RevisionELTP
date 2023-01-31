import React from "react";
import { Route, Routes } from "react-router-dom";

export const Routers = ({array}:any) => {
    // console.log(`<${element}>`)
  return(
    // <Routes>
    // <Route path={path} element={<Element/>}/>
    // </Routes>
<Routes>
    {
        array.map((item:any)=>{
            const Element=item.component
           return  <Route path={item.path} element={<Element/>}/> 
        })

    }
</Routes>
            
        
    
    
  )
   
};
