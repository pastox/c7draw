import React from 'react';
import { Header } from './Components/Header';
import { Table } from './Components/Table';
import { Footer } from './Components/Footer';
import {  Admin } from './Components/Admin';
import { TeamService } from './services/team.services';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      gender : 0,
      admin : false,
      selectedTeamsA : [],
      selectedTeamsB : []
    }
    this.teamService = new TeamService();
    this.clientAdmin = this.clientAdmin.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.updateSelectedTeams = this.updateSelectedTeams.bind(this);
  }

  componentDidMount(){
    this.updateSelectedTeams();
  }

  componentDidUpdate(){
    this.teamService.getSelectedTeamsByGenderAndGroup(this.state.gender, 'A').then(teamsA => {
      this.teamService.getSelectedTeamsByGenderAndGroup(this.state.gender, 'B').then(teamsB => {
        if (JSON.stringify(teamsA) !== JSON.stringify(this.state.selectedTeamsA)){
          this.setState({
            selectedTeamsA : teamsA,
            selectedTeamsB : teamsB
          })
        }
      })
    })
  }
  
  render(){
    let admin;
    if (this.state.admin){
      admin = <Admin gender={this.state.gender} updateSelectedTeams={this.updateSelectedTeams}/>
    } else {
      admin = '';
    }
    return (
      <div className="App">
          <Header gender={this.state.gender} changeGender={this.changeGender}/>
          <div className = 'tablesContainer'>
            <Table groupName='A' gender={this.state.gender} teams={this.state.selectedTeamsA}/>
            <Table groupName='B' gender={this.state.gender} teams={this.state.selectedTeamsB}/>
          </div>
          {admin}
          <Footer handleClick={this.clientAdmin}/>
      </div>
    );
  }

  clientAdmin(){
    this.setState({
      admin : !this.state.admin
    })
  }

  changeGender(){
    this.setState({
      gender : 1 - this.state.gender
    })
  }

  updateSelectedTeams(){
    this.teamService.getSelectedTeamsByGenderAndGroup(this.state.gender, 'A').then(teamsA => {
      this.teamService.getSelectedTeamsByGenderAndGroup(this.state.gender, 'B').then(teamsB => {
        this.setState({
          selectedTeamsA : teamsA,
          selectedTeamsB : teamsB
        })
      })
    })
  }
  
}

export default App;
