import React, { Component } from 'react'
import Campaign from "./Compain.jsx";
import RichTextEditor from "./Drafts";

import DraftContainer from "../styles/DraftContainer";
export default class Home extends Component {

    render () {
        return (
            <div className='Home'>
                <Campaign/>
            </div>
        )
    }
}
