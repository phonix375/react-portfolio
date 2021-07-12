import React from 'react';
import {Container} from 'react-bootstrap';


function Projects(){
    const projectList = [
        {
            name:"opinion",
            discription: "this is a discription of the project",
            link: 'https://this is my link'
        },
        {
          name:"food",
          discription: "this is a discription of the project",
          link: 'https://this is my link'
      },

    ]
    return(
      <Container className="projects">
        {projectList.map((project, i) => (
            <div className={`project ${project.name} projectBackgroundSettings projects-tiles`} key={project.name}>
            <div className="projecttext">
                <a href="https://glacial-hamlet-81144.herokuapp.com/" target="_blank" rel="noreferrer">
                    <h4>{project.name}</h4>
                    <p>{project.discription}</p>
                </a>
            </div>
        </div>
        ))}
    </Container>
    )
}

export default Projects;