import React from 'react';
import { TeamApiService } from './api/team.api.services';

export class TeamService extends React.Component{

    constructor(){
        super();
        this.teamApiService = new TeamApiService();
    }

    getNotSelectedTeamsByGender(gender){
        try {
            return this.teamApiService.getNotSelectedTeamsByGender(gender).then(teams => {
                return teams
            })
        }
        catch (rejected){
            throw rejected;
        }
    }

    getSelectedTeamsByGenderAndGroup(gender, groupName){
        try {
            return this.teamApiService.getSelectedTeamsByGenderAndGroup(gender, groupName).then(teams => {
                return teams
            })
        }
        catch (rejected){
            throw rejected;
        }
    }

    giveGroupToTeam(groupName, teamId){
        try {
            return this.teamApiService.giveGroupToTeam(groupName, teamId).then(res => {
                return res
            })
        }
        catch (rejected){
            throw rejected;
        }
    }

    reinitializeDraw(gender){
        try {
            return this.teamApiService.reinitializeDraw(gender).then(res => {
                return res
            })
        }
        catch (rejected){
            throw rejected;
        }
    }

}