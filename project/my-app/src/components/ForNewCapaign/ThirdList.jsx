import React, {Component} from "react";
import {Container, BoxInput, InputStyle, BoxText, Input , TextBox} from "./ThirdStep";

class NewCampaignSituation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CampaignSituation:''
        };
    }

    clickSubmit = event => {
        event.preventDefault();
        const { CampaignSituation } = this.state;
        const Name = {
            CampaignSituation
        };

        this.setState({CampaignSituation: CampaignSituation});
        alert(this.state.CampaignSituation)
    };
    render(){
        return(
            <Container>
                <div>
                    <div className='title'>
                        <h1>Опишите ситуацию. Что происходит сейчас?</h1>
                    </div>
                    <div className='text'>
                        <h2>Очень важно, чтобы читатели понимали ситуацию и понимали, что они полписывают. Иначе люди будут просто проистывать Вашу петицию и вы не привлечеть внимания к важной проблеме</h2>
                    </div>
                    <textarea cols="60" rows="5"
                        onChange={this.props.onChange}
                        type="text"
                        value={this.props.CampaignSituation}
                    />
                    <br/><br/>
                </div>
            </Container>
        )
    }

};

class NewCampaignSituationTwo extends Component{
    render(){
        return(
            <BoxText>
                <TextBox>
                    <h3> <br/>       Расскажите о проблеме через историю людей, для которых ее решение жизненно важно<br/>

                        Люди более активно подключаются к вашей кампании, если они понимают, на кого и как влияет проблема, указанная в ней.<br/><br/>
                        Опишите возможное решение<br/>

                        Расскажите, что должно произойти, кто и как может повлиять на ситуацию. Опишите, что произойдет, если вы победите или проиграете.<br/><br/>
                        Сделайте текст личным<br/>

                        Читатели более склонны поддержать и подписать петицию, если понимают, почему для вас это важно.<br/><br/>
                        Уважайте других<br/>

                        Не оскорбляйте, не используйте язык ненависти и не угрожайте другим.</h3>
                </TextBox>
            </BoxText>
        )
    }
}

export {NewCampaignSituation, NewCampaignSituationTwo}