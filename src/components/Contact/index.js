import React from "react";
import {Drop,DropSpan,DropTitle,TextArea,Input,Form,FormInput,InputText,NestedInput} from "./style.js";

const Contact = () =>{
    return(
         <Drop>
            <div className="container">
                <DropTitle><DropSpan>Drop </DropSpan>Me A line</DropTitle>
                <Form>
                    <FormInput>
                        <NestedInput type="text" placeholder="Your Name" />
                        <NestedInput type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputText type="text" text="text" className="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <Input type="submit" value="Send Message" />
                </Form>

            </div>
        </Drop>
    )
}

export default Contact;