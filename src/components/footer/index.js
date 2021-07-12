import React from 'react';
import facebook from '../../assets/img/facebook.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'

function Footer(){
    return(
        <footer>
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
        </footer>
    )
}

export default Footer;