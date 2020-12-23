import React, {Component} from "react";
import {Campaigns} from './Compain.jsx'

export const GetMyCampaigns = () => {
    return fetch(`/api/getMyCampaigns`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export default class MyCampaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted:false,
            campaigns: []
        }
    }
    componentDidMount() {
        GetMyCampaigns().then(data => {

            if (data.status == 'ok') {
                this.setState({mounted: true, campaigns: data.data})
            }
            else{
                this.setState({mounted:true})
            }
        })

    }

    render () {
        const {mounted} = this.state

        return (
            <div>
                {mounted && this.state.campaigns.map((i, key) => {
                    return <Campaigns id = {this.props.id} user = {this.props.user} Title = {i.CampaignName} Quest = {i.CampaignQuest} Situation = {i.CampaignSituation}/>})}
            </div>
        )
    }
}