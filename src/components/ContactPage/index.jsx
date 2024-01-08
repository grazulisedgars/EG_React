import React from "react";
import "../ContactPage/style.css"

function ContactPage() {
    const emailAddress = 'grazulisedgars@gmail.com';
    return (
        <>
        <div className="contactForm">
            <h2 className="contactHeader">Contact Information</h2>
            <p>Email address: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            <p>Download CV: <a href="src/assets/CV/Edgars Grazulis CV UK.pdf" target="_blank" rel="noopener noreferrer"> (PDF) </a>
            </p>
            <p>
                GitHub: <a href="https://github.com/grazulisedgars/">grazulisedgars</a>
            </p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/grazulisedgars95/">grazulisedgars</a>
            </p>
            <h3 className="contactHeader">Any Questions?</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group form-check">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Your comments</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <div className="form-group form-check">
                </div>
                <button type="submit" className="btn btn-custom">Submit</button>
            </form>
            </div>
        </>
    );
}

export default ContactPage;
