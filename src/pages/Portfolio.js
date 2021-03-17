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
                    title: 'Happy Trees',
                    link: 'https://guarded-ravine-40907.herokuapp.com/',
                    source: 'https://github.com/jesusefraingonzalez/happy-trees/',
                    image: './images/happy-tree-logo.jpg',
                    alt: 'Happy Tree Logo',
                },
                {
                    title: 'Password Generator',
                    link: 'https://jesusefraingonzalez.github.io/password-generator/',
                    source: 'https://github.com/jesusefraingonzalez/password-generator/',
                    image: './images/password.png',
                    alt: 'Password Generator',
                },
                {
                    title: 'Weather App',
                    link: 'https://jesusefraingonzalez.github.io/weather-app',
                    source: 'https://github.com/jesusefraingonzalez/weather-app/',
                    image: './images/weather.png',
                    alt: 'Weather App',
                },
                {
                    title: 'BrewFinder',
                    link: 'https://jesusefraingonzalez.github.io/brewfinder/',
                    source: 'https://github.com/jesusefraingonzalez/brewfinder/',
                    image: './images/brewfinder.png',
                    alt: 'Brewfinder',
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