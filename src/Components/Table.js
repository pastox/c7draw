import React from 'react';

export class Table extends React.Component{

    render(){
        const rows = this.props.teams.map((team) => (
            <tr key={team._id}>
                <th><h5><strong>{team.name}</strong></h5></th>
            </tr>
        ))
        return (
            <table className='team-list col-lg-3'>
                <tbody>
                    <tr>
                        <th><h3><strong>Group {this.props.groupName}</strong></h3></th>
                    </tr>
                    {rows}
                </tbody>
            </table>
        )
    }

}