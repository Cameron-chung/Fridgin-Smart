import React from "react";

export const Wrapper = ({children}) => {
    return(
        <div style = {{width: '600px', height: '100%', margin: '20px auto auto auto', textAlign: 'center', border: '1px solid grey'}}>
            {children} </div>
    )
}