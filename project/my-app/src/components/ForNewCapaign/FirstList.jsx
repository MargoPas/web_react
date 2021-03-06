import React, {Component} from "react";
import {Container , Input} from "./FirstStepStyle";
import {Button} from "../../styles/button";


class NewCampaignName extends Component {
    constructor(props) {
        super(props);
        this.clickSubmit = this.clickSubmit.bind(this)
        this.Input = React.createRef();
    }



    clickSubmit(event) {
        event.preventDefault();
        const { CampaignName } = this.state;
        const Name = {
            CampaignName
        };

            this.setState({CampaignName: CampaignName});
            alert(this.state.CampaignName)
        };


    render(){
        return(
            <div>
                <Container>
                    <div>
                        <div className='title'>
                            <h1>Что желаете видеть по-другому?</h1>
                        </div>
                        <div className='text'>
                            <h2>Надо помнить, что это бдет заголовком вашей петиции и именно он должен привлекать внимание людей к поставленной проблеме. Постарайтесь написать это пункт наиболее емко и понятно.</h2>
                        </div>
                        <Input
                            onChange={this.props.onChange}
                            type="text"
                            value={this.props.CampaignName}
                        /><br/><br/>
                    </div>
                </Container>
            </div>
        )
    }


};

class NewCampaignNameTwo extends Component{
    render(){
        return(
            <Container>
                <div className='box'>
                <div className = 'text-box'>
                    <h3> <br/>  Пишите четко и кратко<br/><br/>   Например: "Законодательно запретите массовую травлю собак в Гродненской области"<br/><br/>   А не "Прекратите убивать животных. Защитите животных Беларуси!"<br/><br/>   Сфокусируйтесь на решении проблемы

                        Например: "Примите в России закон против домашнего насилия"

                        А не "Защитите женщин от домашнего насилия"
                        Расскажите о важности и срочности

                        Например: "Остановите вырубку нашего парка, пока еще не поздно"</h3>
                </div>
                </div>
            </Container>
        )
    }
}
export {NewCampaignName, NewCampaignNameTwo}