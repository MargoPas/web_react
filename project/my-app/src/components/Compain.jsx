import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyCampaign from "../styles/MyCompain.js";
import {Check} from "@material-ui/icons";

export const checking = () => {
    return fetch(`/api/newCampaign`, {
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

export const updateSignature = (body) => { //Campaign name and user right now
    return fetch(`/api/update_UserList`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

        .then(response => {
            return response.json();
        })

        .catch(err => console.log(err));
};
export const getNumber = (body) => { //Campaign name and user right now
    return fetch(`/api/get_number`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json();
        })

        .catch(err => console.log(err));
};

export const DeleteCampaign = (body) => { //Campaign name and user right now
    return fetch(`/api/deleteCampaign`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json();
        })

        .catch(err => console.log(err));
};
export const GetAllCampaigns = () => {
    return fetch(`/api/allcampaigns`, {
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

export class Campaigns extends Component{
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            number: 0,
            signature: false
        }
    }
clickCampaign = () => {
    this.setState({click: true})
    console.log('done')
}
componentDidMount() {
        const body = {
            CampaignName: this.props.Title
    }
    getNumber(body).then(data => {


        if (data.status == 'ok'){
            this.setState({number: data.data.Number})
        }
        else {
            alert('something gone wrong in taking number')
        }
    })
}

    clickUpdate = () => {
      const body = {
            CampaignName: this.props.Title,
            id: this.props.id
        }
        updateSignature(body).then(data => {
            if (data.status == 'ok'){
                const newNumber = this.state.number + 1
                this.setState({number: newNumber})

            }
            else{
                alert('something went wrong in updating')
            }
            }
        )
}

clickDelete = () => {
        const body ={
            CampaignName: this.props.Title
        }
        DeleteCampaign(body).then(data => {
            if(data.status == 'ok'){
                alert('deleted')
            }
            else{
                alert('not deleted')
            }

        })
}
    render() {
        const {signature, number, click} = this.state
        return (
            <MyCampaign>
            <Card className='root'>
                    <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.Title}
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           Кто: {this.props.Quest}

                        </Typography>
                        {click && <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.Situation}
                        </Typography> }

                    </CardContent>
                <CardActions>
                    {this.props.user && <Button onClick={this.clickUpdate} size="small" color="primary">
                        Подписаль петицию
                    </Button>}
                     <p>{number}</p>
                    <Button onClick={this.clickCampaign} size="small" color="primary" >
                        Ознакомиться
                    </Button>
                    {this.props.admin && <Button onClick={this.clickDelete} size="small" color="primary" >
                        удалить
                    </Button>}
                </CardActions>
            </Card>
            </MyCampaign>
        );
    }
}

export class Campaign extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mounted:false,
            campaigns: []
        };
    }
    componentDidMount() {
        GetAllCampaigns().then(data => {
            this.setState({mounted:true, campaigns: data.data})

        })

    }
    render(){
        const {mounted, campaigns} = this.state
        return(
            <div>
                 {mounted && this.state.campaigns.map((i, key) => {
                     return <Campaigns admin = {this.props.admin} id = {this.props.id} user = {this.props.user} Title = {i.CampaignName} Quest = {i.CampaignQuest} Situation = {i.CampaignSituation}/>})}
            </div>
        )
    }


}