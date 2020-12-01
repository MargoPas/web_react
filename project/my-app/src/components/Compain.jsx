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


export default class Campaign extends Component{
    render() {
        return (
            <MyCampaign>
            <Card className='root'>
                <CardActionArea>
                    <CardMedia
                        className='media'
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Требуем прекратить уголовное дело в отношении сестер Хачатурян
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            На днях сестрам Хачатурян следствие предъявило обвинение по ч. 2 ст.105 - "Убийство группой лиц по предварительному сговору". При этом факты сексуального насилия, насилия постоянного и жизни девочек в перманентной психотравмирующей ситуации следствие тоже подтвердило. Эта статья грозит девочкам, много лет подвергающимся истязаниям, домашнему и сексуальному насилию, грозит до 20 лет за решеткой за то, что они не дали дальше себя бить и насиловать!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Подписаль петицию
                    </Button>
                    <Button size="small" color="primary">
                        Ознакомиться
                    </Button>
                </CardActions>
            </Card>
            </MyCampaign>
        );
    }
}

