import styled from "styled-components";

export const Drop=styled.div`
    padding: 50px 0;
    text-align: center
`

export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:767px){
        font-size:40px;
    }
`

export const DropSpan = styled.span`
    font-weight: normal;
`

export const Form=styled.form`
    width: 70%;
    margin: auto;
    @media (max-width:767px){
        width:90%;
    }
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    cursor: pointer;
`
export const FormInput = styled.div`
    overflow: hidden;
    display:flex;
    justify-content: space-between;
`

export const NestedInput = styled.input`
    width:49%;
    padding:3px 5px;
    @media (max-width:767px){
        width:100%;
    }
`



export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const InputText=styled(Input)`
    width:100%;
    margin-top:10px;
`




/* .drop form input[type=submit] {
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
} */