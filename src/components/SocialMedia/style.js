import styled from "styled-components";

export const SocialMedia = styled.div`
    width:100%;
    height: auto;
    overflow: hidden
`
export const SocialItem = styled.div`
    width: 32%;
    margin-left: 1%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.bg ? props.bg: ""};
    @media (max-width:991px) {
        width: 100%;
        float: none;
        margin-bottom: 5px;
}
`

export const SocialIcon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const SocialPara = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const Span=styled.span`
    display: block;
    margin-bottom: 8px
`

export const SpanTitle=styled.span`
    font-weight: normal
`

