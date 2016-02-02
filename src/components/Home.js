import React from 'react';
import { Link } from 'react-router';
import { someProjects } from '../utils/projects';
import testimonials from '../utils/testimonials';

class Home extends React.Component {

    render() {

        let work = someProjects.map((p, index) => {

            return (
                <Link to={`/work/${p.name}`} key={index}>
                    <div className="col-md-4 col-sm-6 col-xs-12 work">
                        <h3>{p.name}</h3>
                        <p>{p.job}</p>
                        <img src={`${p.image}`} alt={`${p.name}`} className="main-image"/>
                        { p.github && <img className="github" src="/images/github_icon.png"/> }
                    </div>
                </Link>
            )
        });

        let testimonial = testimonials.map((t, index) => {

            return (
                <div className="testimonial col-sm-4 col-xs-12" key={index}>
                    <img src={`${t.image}`} alt={`${t.name}`}/>
                    <p>{t.testimonial}</p>
                    <h3 className="t-name">{t.name}</h3>
                    <h3>{t.position}</h3>
                </div>
            )
        });

        return (
            <div className="home-container">

                <div className="welcome-home">
                    <div className="container col-sm-12">
                        <div className="about-me">
                            <h1>
                                I'm full stack web and mobile app developer, experienced in UX/UI design.
                                Past 5 years i collaborated with amazing people around the world to create beautifully-designed, robust solutions.
                                I’m passionate about building high quality applications and user interfaces with modern web technologies.
                                In my free time i enjoy contributing to open source projects.
                            </h1>
                        </div>

                        <div className="go-to-work">
                            <Link to="/skills">
                                See My Skills
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="some-work container">
                    <h2>Some Of My Work</h2>
                    <div className="home-work-container">
                        {work}
                    </div>

                    <div className="go-to-projects">
                        <Link to="/work">
                            Full Portfolio
                        </Link>
                    </div>
                </div>

                <div className="testimonials-container">
                    <div className="testimonials container">
                        <h2>Testimonials</h2>
                        {testimonial}
                    </div>
                </div>

            </div>
        )
    }

}

export default Home;