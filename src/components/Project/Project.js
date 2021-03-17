import { React, Component } from 'react';

class Project extends Component {
    state = {
        title: '',
        link: '',
        source: '',
        image: '',
        alt: '',
    }

    componentDidMount() {
        this.setState(this.props.project);
    }

    render() {
        return (
            <>
                <div className="card">
                    <h2>{this.state.title}</h2>
                    <a href={this.state.link} target="_blank" rel="noreferrer" >
                        <img src={this.state.image} alt={this.state.alt} style={{ maxWidth: 500 }} className="m-3"></img>
                    </a>
                    <a href={this.state.source} target="_blank" rel="noreferrer">Source Code</a>
                </div>
            </>
        )
    }
}

export default Project;