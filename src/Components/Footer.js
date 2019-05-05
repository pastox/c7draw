import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

library.add(faUser)

export class Footer extends React.Component{

    render(){
        return(
            <footer>
                <button onClick={this.props.handleClick}>
                    <FontAwesomeIcon icon="user" />
                </button>
            </footer>
        )
    }

}