import { React, Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
                <div className="container border bg-light">

                    <h1 className="m-3">Contact</h1>

                    <div className="col-5">
                        <form>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Name</span>
                                </div>

                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Email</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>


                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Message</span>
                                    </div>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark mt-3 mb-3">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;