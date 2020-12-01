import React, {Component} from "react";
import {Container, Input} from "./SecondStep";

class NewCampaignQuest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CampaignQuest:''
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { CampaignQuest } = this.state;
        const Name = {
            CampaignQuest
        };

        this.setState({CampaignQuest: CampaignQuest});
        alert(this.state.CampaignQuest)
    };
    render(){
        const {
            CampaignQuest
        } = this.state;
        return(
            <Container>
                <div>
                    <div className='title'>
                        <h1>Кто может разрешить вашу проблему?</h1>
                    </div>
                    <div className='text'>
                        <h2>Надо определить, кому данная петиция буут направлена. Какому-то определенному человеку либо же возможно группе лиц, которые отвечают за данное направление..</h2>
                    </div>
                    <Input
                        onChange={this.handleChange("CampaignQuest")}
                        type="text"
                        value={CampaignQuest}
                    />
                    <br/><br/>
                </div>
            </Container>
        )
    }

};

class NewCampaignQuestTwo extends Component{
    render(){
        return(
            <Container>
                <div className='box'>
                    <div className = 'text-box'>
                        <h3> <br/>    Многие петиции адресованы целым организациям и учреждениям<br/>

                            Например: «Аэрофлот» или «Яндекс». Вы можете указать имя главы организации или сотрудника, способного повлиять на вашу ситуацию.<br/><br/>
                            Это также могут быть политики, чиновники, правоохранительные и законодательные органы<br/>

                            Например: «Городская Дума», имя сотрудника учреждения или представителя государственной власти, напрямую занимающегося вопросом, который вы подниматете в своей петиции.<br/><br/>
                            Не задерживайтесь долго на этом этапе<br/>

                            Вы сможете добавить или изменить адресатов даже после создания петиции. А пока укажите самых очевидных — и до вашей готовой петиции осталось пару шагов!</h3>
                    </div>
                </div>
            </Container>
        )
    }
}

export {NewCampaignQuest, NewCampaignQuestTwo}