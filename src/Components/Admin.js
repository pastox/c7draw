import React from 'react';
import { TeamService } from '../services/team.services';
import { Select } from './Select';

export class Admin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            teams : []
        }
        this.teamService = new TeamService();
        this.handleAddClick = this.handleAddClick.bind(this);
        this.reinitializeDraw = this.reinitializeDraw.bind(this);
    }

    componentDidMount(){
        this.teamService.getNotSelectedTeamsByGender(this.props.gender).then(teams => {
            this.setState({
                teams
            })
        })
    }

    componentDidUpdate(){
        
        this.teamService.getNotSelectedTeamsByGender(this.props.gender).then(teams => {
            if (JSON.stringify(teams) !== JSON.stringify(this.state.teams)){
                this.setState({
                    teams
                })
            }
        })
    }

    render(){
        const options = this.state.teams.map(team => (
            <option value={team._id} key={team._id}>{team.name}</option>
        ))
        return(
            <div>
                <div className = 'select'>
                    <Select groupName="A" options={options} handleAddClick={this.handleAddClick}/>
                    <Select groupName="B" options={options} handleAddClick={this.handleAddClick}/>
                </div>
                <button onClick={this.reinitializeDraw}>Reinitialize</button>
            </div>
        )
    }

    handleAddClick(groupName, teamId){
        this.teamService.giveGroupToTeam(groupName, teamId).then(res => {
            this.setState({
                teams : []
            })
        }).then(() => {
            this.props.updateSelectedTeams();
        })
    }

    reinitializeDraw(){
        this.teamService.reinitializeDraw(this.props.gender).then(res => {
            this.setState({
                teams : []
            })
        }).then(() => {
            this.props.updateSelectedTeams();
        })
    }

}