import React from "react";
import hot_dog from './img/hotdog.svg';

class About extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        document.title = 'About Us | Dirty Dogs';
    }
    
    render() {
        function comingSoon() {
            alert('Coming soon');
        }
        return (
            <section id="about" className="main_about">
                <div className="container">
                    <div className="main_about__wrapper">
                        <img className="about_logo" src={hot_dog} alt='Hot Dog' />
                        <h1 className="about_description">Dirty Dogs serves all-beef, vegan and vegatagian hot&nbsp;dogs.</h1>
                        <a onClick={comingSoon} className="about_link">More Dogs ‘n Make Em Hot</a>
                    </div>
                </div>
            </section>
        );
    }
  }


export default About;