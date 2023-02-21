import styled from "styled-components";

export const NavbarSection = styled.div`
    padding: 10px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0px auto;
`


export const Logo = styled.div`
    display:flex;
`

export const LogoText = styled.h2`
    font-size: 20px;
`

export const UlList = styled.ul`
    list-style: none;
`

export const UlListItem = styled.li`
    display: inline-block;
    a{
        display: block;
    color: #222;
    text-decoration: none;
    padding: 5px 10px;
    transition: .3s;
    &:hover{
    color: #eb5424
    }
    }
`

export const Anchor = styled.a`
    display: block;
`
