import React from "react";
import "../ProjectsPage/ProjectsPage.css"

function ProjectsPage(props) {

    return (
        <>
        <h2 className="projects-page-h2">Projects Page</h2>
        <div className="projects-page">{props.children}</div>
        </>
    )
  }
  
  export default ProjectsPage;