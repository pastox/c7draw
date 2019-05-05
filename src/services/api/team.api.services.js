import React from 'react';
import {apiUrl} from './url';
import axios from 'axios';

export class TeamApiService extends React.Component{

    getNotSelectedTeamsByGender(gender) {
		let url = apiUrl + 'teams/' + String(gender);
				
		return axios.get(url).then(res => {
			return Promise.resolve(res.data.docs);
		}).catch(err => {
			return Promise.reject(Error(err.response))
		});
    }
    
    getSelectedTeamsByGenderAndGroup(gender, groupName){
			let url = apiUrl + 'teams/' + String(gender) + '/' + groupName;

			return axios.get(url).then(res => {
				return Promise.resolve(res.data.docs);
			}).catch(err => {
				return Promise.reject(Error(err.response))
			});
		}

		giveGroupToTeam(groupName, teamId)	{
			let url = apiUrl + 'team/setgroup/' + teamId + '/' + groupName;
			return axios.get(url).then(res => {
				return Promise.resolve(res);
			}).catch(err => {
				return Promise.reject(Error(err.response))
			});
		}

		reinitializeDraw(gender){
			let url = apiUrl + 'teams/reinitialize/' + gender;
			return axios.get(url).then(res => {
				return Promise.resolve(res);
			}).catch(err => {
				return Promise.reject(Error(err.response))
			});
		}

}