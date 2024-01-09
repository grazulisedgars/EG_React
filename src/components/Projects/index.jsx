import React from "react";
import "../Projects/Project.css"

function Projects(props) {
  return (
    <>

      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.screenshot} />
        </div>
        <div className="content">
        <p><strong>Project:</strong> {props.title}</p>
        <p><strong>Link to:</strong>  <a href={props.deployLink}>Deployed App</a></p>
        <p><strong>Link to:</strong>  <a href={props.githubLink}>GitHub</a></p>
        </div>
      </div>
    </>
  );
}

export default Projects;
            