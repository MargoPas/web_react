import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
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
import green from '@material-ui/core/colors/green';

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

const CampaignName = 'Rita'
const CampaignQuest = 'kjbreadks'

const NewCampaign_Name = new NewCampaignName
const NewCampaign_Quest = new NewCampaignQuest(CampaignQuest)
const NewCampaign_Situation = new NewCampaignSituation

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    icon: {
        backgroundColor: "#ccf9e9",
        clipPath: "circle(50%)",

            color: "black"
    },
    backButton: {
        background:'red',
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

    },
}));

function getSteps() {
    return ['Что?', 'Кто?', 'Ситуация', 'Фото'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <NewCampaignName />
        case 1:
            return <NewCampaignQuest />;
        case 2:
            return <NewCampaignSituation />;
        default:
            return 'Unknown stepIndex';
    }
}

function getStepContentTwo(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <NewCampaignNameTwo/>;
        case 1:
            return <NewCampaignQuestTwo/>;
        case 2:
            return <NewCampaignSituationTwo/>;
        default:
            return 'Unknown stepIndex';
    }
}

function getStepClick(stepIndex, event){
    switch (stepIndex){
        case 0:
            function clickSubmitName() {
                NewCampaignName.clickSubmit(event)
            }
            return clickSubmitName()
        case 1:
        function clickSubmitQuest() {

            NewCampaign_Quest.clickSubmit(event)
        }
            return clickSubmitQuest()
        case 2:
        function clickSubmitSituation() {

            NewCampaign_Situation.clickSubmit(event)
        }
            return clickSubmitSituation()
        case 3:
            return function(){
                return 0
            }
    }

}


export default class HorizontalLabelPositionBelowStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            CampaignName: '',
            CampaignQuest:'',
            CampaignSituation:'',
        }
        this.clickSubmit = this.clickSubmit.bind(this)
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

    updateData = (value) => {
        const {activeStep} = this.state
        switch (activeStep) {
            case 0:
                this.setState({CampaignName: value})
                alert(CampaignName)
            case 1:
                this.setState({CampaignQuest: value})
            case 2:
                this.setState({CampaignSituation: value})
        }
    }


    clickSubmit = event => {
        event.preventDefault();
        const {activeStep} = this.state
        alert(activeStep)
        switch (activeStep) {
            case 0:
                const {CampaignName} = this.state
                this.setState({CampaignName: CampaignName})
                alert(CampaignName)
            case 1:
                const {CampaignQuest} = this.state
                this.setState({CampaignQuest: CampaignQuest})
            case 2:
                const {CampaignSituation} = this.state
                this.setState({CampaignSituation: CampaignSituation})
        }
    };

    getSteps() {
        return ['Что?', 'Кто?', 'Ситуация', 'Фото'];
    }

    render() {
        const {
            activeStep
        } = this.state
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
                    {activeStep === getSteps().length ? (
                        <div>
                            <Typography className= 'instructions'>All steps completed</Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <div className='instructions'>{getStepContent(activeStep)}</div>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className='backButton'
                                >
                                    Back
                                </Button>
                                <Button variant="contained" type='submit' color="primary" onClick={this.handleNext}>
                                    {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                            <div className='instructions'>{getStepContentTwo(activeStep)}</div>
                        </div>
                    )}
                </div>
            </div>
            </ThemeProvider>
        );
    }
}
