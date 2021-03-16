import { React, Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-center text-lg-start">
                <div className="text-center p-3" >
                    <a href="https://www.github.com/jesusefraingonzalez"><button>Github</button></a>
                    <a
                        href="https://www.linkedin.com/in/efra%C3%ADn-gonz%C3%A1lez-aa6233123/"><button>linkedIn</button></a>
                    <a href="./resume.pdf"><button>Resumé</button></a>
                </div>
            </footer>
        );
    }
}

export default Footer;
