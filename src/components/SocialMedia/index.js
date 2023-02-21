import React, { Component } from "react";
import axios from "axios";
import {SocialMedia,SocialItem,SocialIcon,Span,SocialPara,SpanTitle} from "./style.js";

class Social extends Component{
    state = {
        social:[]
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => {
            // console.log(res)
            this.setState({
                social: res.data.social,
            })
        })
        
    }

    render() {
        let { social } = this.state;
        let allSocial = social.map(res => {
            return (
                <SocialItem key={res.id} bg={res.bg_color}>
                    <SocialIcon className={res.icon} ></SocialIcon>
                    <SocialPara>
                        <Span>{res.title }</Span>
                        <SpanTitle>{res.body}</SpanTitle>
                    </SocialPara>
                </SocialItem>
            )
        })
        return (
            <SocialMedia>
                {allSocial}
            </SocialMedia>
        )
    }
}

export default Social;