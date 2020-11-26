import React from "react";
import "./form.css";


function Form() {
    return (
    <div className="container-fluid">
            <div className="col-lg-6">
            <form>
                <div className="form-group form-group-lg">
                    <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <br></br>
                <div className="form-group form-group-lg">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <br></br>
                <div className="form-group form-group-lg">
                    <input type="text" className="form-control" placeholder="Message"/>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    </div>

    )
};

export default Form;


   