import React from "react";

function Wrapper(props) {

    return (
        <>
        <h2>Projects Page</h2>
        <div className="wrapper">{props.children}</div>
        </>
    )
  }
  
  export default Wrapper;