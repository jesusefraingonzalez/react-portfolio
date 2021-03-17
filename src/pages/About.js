import { React, Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container bg-light border mb-4">
                <h1 style={{ marginLeft: 30 + 'px'}}>About Me</h1>
                <div className="col clearfix">
                    <img src="./images/profile.JPG" style={{maxWidth: 500 + 'px'}} alt="Profile"
                        className="float-left rounded col-12" />

                    <p className="col-12"> I am someone who is always striving to learn. I've been interested in computers and how
                    they work since I was six or seven years old, messing around on the family computer. I have some
                    university level programming experience in C++ and Matlab, in addition to some self-taught Python. I
                    decided to take the plunge and immerse myself in a coding bootcamp in order to find my way into the IT
                    sector as a web developer.<br></br>

                                In my spare time, I can be found playing video games, watching soccer or Dodger's games, or playing with
                    my dog. <br></br> <br></br>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;