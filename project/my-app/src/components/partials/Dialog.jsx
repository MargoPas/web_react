import React, { Component } from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NewCampaignName, NewCampaignNameTwo} from "../ForNewCapaign/FirstList.jsx";
import {NewCampaignQuest, NewCampaignQuestTwo} from "../ForNewCapaign/SecondList.jsx";
import {NewCampaignSituation, NewCampaignSituationTwo} from "../ForNewCapaign/ThirdList.jsx";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {Redirect} from "react-router-dom";

export const checking = user => {
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
export const GetUserId = () => {
    return fetch(`/api/user_id`, {
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
const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: red[500],
        },
    },
    root: {
        width: '100%',
    },
    icon: {
        backgroundColor: "#ccf9e9",
        clipPath: "circle(50%)",

        color: "black"
    },

});

export const CreateCampaign = campaign => {
    console.log(campaign)
    return fetch(`/api/newCampaign`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campaign)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



function getSteps() {
    return ['Что?', 'Кто?', 'Ситуация'];
}


export default class HorizontalStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            CampaignName:'',
            CampaignQuest:'',
            CampaignSituation:'',
            User_id:'',
            error: false,
            redirect: false,
            redirect2:false
        }
        this.checkUser = this.checkUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }
    checkUser = (event) => {
        try {
            const {redirect} = this.state;
            const user = {
                redirect
            };

            checking(user).then(data => {
                if (data.status === 'not user') {
                    this.setState({redirect: true});

                    return false;
                } else {
                    this.setState({redirect: false})


                    GetUserId().then(data => {

                        if (data.status == 'ok') {
                            this.setState({User_id: data.data})
                            const Number = 1
                            const {CampaignName, CampaignQuest, CampaignSituation, User_id} = this.state;
                            const UserList = User_id
                            const campaign = {
                                CampaignName: CampaignName, CampaignQuest: CampaignQuest, CampaignSituation: CampaignSituation, User_id: User_id, Number:Number, UserList:UserList
                            };
                            CreateCampaign(campaign).then(data => {
                                if (data.status == 'ok') {
                                    this.setState({redirect2: true});
                                } else {
                                    this.setState({error: true})
                                }
                            });
                        } else {
                            this.setState({User_id: 'error_id'})
                        }
                    })



                    return true;
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }
    handleNext = () => {
        const {activeStep} = this.state
        const state = {
            activeStep
        }
        this.setState({activeStep: state.activeStep + 1});
    };

    handleBack = () => {
        const {activeStep} = this.state
        const state = {
            activeStep
        }

        this.setState({activeStep: state.activeStep - 1});
    };

    handleReset = () => {
        this.setState({activeStep: 0});
    };

    handleChange = name => event =>{

        this.setState({ [name]: event.target.value });
    }




    getSteps() {
        return ['Что?', 'Кто?', 'Ситуация'];
    }
    FinishRedirect = () =>{
        return <Redirect to = 'login'/>
    }
    render() {
        const {
            activeStep,
            redirect,
            redirect2
        } = this.state
        if (redirect){
            return <Redirect to='/login'/>
        }
        else{
            if (redirect2){
                return <Redirect to='/home'/>
            }
        }
        return (
            <ThemeProvider theme={theme}>
            <div className='root'>

                <Stepper activeStep={activeStep} alternativeLabel>
                    {getSteps().map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === getSteps().length  ? (
                        <div>
                            <Typography className= 'instructions'>All steps completed</Typography>
                            <Button color="primary" onClick={this.checkUser }>Finish</Button>
                            <Button color="primary" onClick ={this.handleReset}>Check</Button>
                        </div>
                    ) : (
                        <div>
                            <div className='instructions'>
                                {activeStep === 0 &&
                                <NewCampaignName CampaignName = {this.state.CampaignName} onChange = {this.handleChange('CampaignName')}/>}
                                {activeStep === 1 &&
                                <NewCampaignQuest CampaignQuest = {this.state.CampaignQuest} onChange = {this.handleChange('CampaignQuest')}/>}
                                {activeStep === 2 &&
                                <NewCampaignSituation CampaignSituation = {this.state.CampaignSituation} onChange = {this.handleChange('CampaignSituation')}/>}
                            </div>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className='backButton'
                                >
                                    Back
                                </Button>
                                <Button variant="contained" type='submit' color="primary" onClick={this.handleNext}>
                                    {activeStep === 0 && 'Next'}
                                    {activeStep === 1 && 'Next'}
                                    {activeStep === 2 && 'Next'}
                                </Button>
                            </div>
                            <div className='instructions'>
                                {activeStep === 0 &&
                                <NewCampaignNameTwo/>}
                                {activeStep === 1 &&
                                <NewCampaignQuestTwo/>}
                                {activeStep === 2 &&
                                <NewCampaignSituationTwo/>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </ThemeProvider>
        );
    }
}
