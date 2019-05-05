import React from 'react';
import logo from '../assets/img/logo.png';

export class Header extends React.Component{

    render(){
        let genderString;
        if (this.props.gender === 0){
            genderString = 'Men';
        } else {
            genderString = 'Women'
        }
        return (
            <div>
                <header className='App-header'>
                    <img src={logo} alt='logo'/>
                    <div className='title-and-button'>
                        <h1><strong>Centrale Sevens {genderString} Draw</strong></h1>
                        <button className='btn' id='gender-button' onClick={this.props.changeGender}>Change Gender</button>
                    </div>
                    <img src={logo} alt='logo'/>
                </header>
            </div>
        )
    }

}