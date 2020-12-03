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



function getSteps() {
    return ['Что?', 'Кто?', 'Ситуация', 'Фото'];
}


export default class HorizontalStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        }
        this.clickSubmit = this.clickSubmit.bind(this)
    }

    handleNext = () => {
        const {activeStep} = this.state
        const state = {
            activeStep
        }
        this.setState({activeStep: state.activeStep + 1});
        alert(this.CampaignName)
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
        const CampaignName = this.props.CampaignName
        const CampaignQuest = this.props.CampaignQuest
        const CampaignSituation = this.props.CampaignSituation
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
                            <div className='instructions'>
                                {activeStep === 0 &&
                                <NewCampaignName CampaignName = {this.state.CampaignName}/>}
                                {activeStep === 1 &&
                                <NewCampaignQuest/>}
                                {activeStep === 2 &&
                                <NewCampaignSituation/>}
                                {activeStep === 3 &&
                                <h3>unknown</h3>}
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
                                    {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                            <div className='instructions'>
                                {activeStep === 0 &&
                                <NewCampaignNameTwo/>}
                                {activeStep === 1 &&
                                <NewCampaignQuestTwo/>}
                                {activeStep === 2 &&
                                <NewCampaignSituationTwo/>}
                                {activeStep === 3 &&
                                <h3>unknown</h3>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </ThemeProvider>
        );
    }
}
