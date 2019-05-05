import React from 'react';

export class Select extends React.Component{

    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = {
            value : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return(
            <div>
                <label>Group {this.props.groupName}</label>
                <select onChange = {this.handleChange}>
                    <option selected={true}>Select Team to Add</option>
                    {this.props.options}
                </select>
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        )
    }

    handleAddClick(){
        this.props.handleAddClick(this.props.groupName, this.state.value);
    }

    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }

}