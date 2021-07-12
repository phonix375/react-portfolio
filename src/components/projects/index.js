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
      <Container>
        {projectList.map((project, i) => (
            <img
            src={require(`../../assets/img/${project.name}.jpg`).default}
            alt={project.name}
            className="project"
            key={i}
          />
          
        ))}
      </Container>
    )
}

export default Projects;