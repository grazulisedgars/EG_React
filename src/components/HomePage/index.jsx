import React from "react";
import "../HomePage/HomePage.css"

function HomePage() {
    return (
        <div className="custom-p-5 mb-4" id="jumbotron">
            <div className="container-fluid custom-py-5">
                <h1 className="display-5 fw-bold">Edgars Grazulis</h1>
                <h2 className="custom-col-md-8 custom-fs-4">React Showcase Portfolio</h2>
                <p className="custom-col-md-8 c-fs-4">My experience in website building extends beyond platforms like Squarespace, Wix and Wordpress</p>
            </div>
        </div>
    );
}

export default HomePage;