import React from "react";
import "./form.css";


function Form() {
    return (
        <div className="container-fluid">
            <div className="col-lg-12 ">
                <form action="mailto:dakuglin@gmail.com"
                method="POST"
                enctype="mulitpart/form-data"
                name="EmailForm">
                    <div className="form-group form-group-lg">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group form-group-lg">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group form-group-lg">
                        <input type="text" className="form-control" placeholder="Message"/>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" className="btn btn-primary form">Send</button>
                </form>
            </div>
        </div>

    )
};

export default Form;


   