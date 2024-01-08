import React from "react";

function FriendCard(props) {
  return (
    <>
   
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.screenshot} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project</strong> {props.title}
          </li>
          <li>
            <strong>Deployed link: </strong> {props.deployLink}
          </li>
          <li>
            <strong>Github link:</strong> {props.githubLink}
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default FriendCard;
