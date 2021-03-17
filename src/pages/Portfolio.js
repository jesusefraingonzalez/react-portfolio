import { React, Component } from 'react';
import Project from '../components/Project/Project';



class Portfolio extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.setState({
            projects: [
                {
                    title: '',
                    link: '',
                    source: '',
                    image: '',
                    alt: '',
                }
            ]
        })
    }

    render() {
        return (
            <>
                {this.state.projects.map(project => {
                    return (
                        <Project
                            key={project.title}
                            project={project}
                        />
                    )
                })}
            </>
        );
    }
}

export default Portfolio;