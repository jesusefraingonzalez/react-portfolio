import { React, Component } from 'react';

class Project extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h2>Happy Trees</h2>
                    <a href="https://guarded-ravine-40907.herokuapp.com/" target="_blank" >
                        <img src="./images/happy-tree-logo.jpg" alt="Happy Trees App" style="max-width:500px; height: auto;" className="m-3"></img>
                    </a>
                    <a href="https://github.com/jesusefraingonzalez/happy-trees/" target="_blank">Source Code</a>
                </div>
            </>
        )
    }
}

export default Project;