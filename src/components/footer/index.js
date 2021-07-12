import React from 'react';
import { ReactComponent as Facebook} from '../../assets/img/facebook.svg'
import { ReactComponent as Linkedin} from '../../assets/img/linkedin.svg'
import { ReactComponent as Github} from '../../assets/img/github.svg'
import {Container} from 'react-bootstrap';


function Footer(){
    return(
        <Container>
            <footer>
            <a href="https://www.facebook.com/alex.kotliar.1" target="_blank" rel="noreferrer"><Facebook className="footerIcon"></Facebook></a>
            <a href="https://www.linkedin.com/in/alexy-kotliar-b5058919b/" target="_blank" rel="noreferrer"><Linkedin className="footerIcon"></Linkedin></a>
            <a href="https://github.com/phonix375" target="_blank" rel="noreferrer"><Github className="footerIcon"></Github></a>
        </footer>
        </Container>
       
    )
}

export default Footer;