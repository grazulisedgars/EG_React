import React from "react";

function ContactPage() {
    return (
        <>
            <p className="col-md-8 fs-4"> LinkedIn: (LinkedIn link)</p>
            <p className="col-md-8 fs-4"> Email: (email address)</p>
            <p className="col-md-8 fs-4"> GitHub: (GitHub)</p>
            <p className="col-md-8 fs-4"> CV: (link to PDF)</p>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default ContactPage;