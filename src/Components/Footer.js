import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';

library.add(faUser)

export class Footer extends React.Component{

    render(){
        return(
            <footer>
                <img src={logo} alt='logo'/>
                <button onClick={this.props.handleClick}>
                    <FontAwesomeIcon icon="user" />
                </button>
                <img src={logo} alt='logo'/>
            </footer>
        )
    }

}