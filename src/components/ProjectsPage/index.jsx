import React from "react";

function ProjectsPage(props) {

    return (
        <>
        <h2>Projects Page</h2>
        <div className="wrapper">{props.children}</div>
        </>
    )
  }
  
  export default ProjectsPage;