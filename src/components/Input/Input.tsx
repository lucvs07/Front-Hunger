import { PaperPlaneRight } from "@phosphor-icons/react";
import { 
    InputContainer,
    InputField,
    SendButton
 } from "./styles";

export const Input = () => {
    return (
        <InputContainer>
            <InputField type='text' placeholder='Guess the Character'/>
            <SendButton title="Send">
                <PaperPlaneRight size={40} color='#C03221' weight='fill'/>
            </SendButton>
        </InputContainer>
    )
};