import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState } from "react";
import { 
    InputContainer,
    InputField,
    SendButton
 } from "./styles";

interface InputProps {
    onChange: (value: string) => void;
    onSend: () => void;
}
export const Input = ({onChange, onSend} : InputProps) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }

    const handleSend = () => {
        onSend();
        setValue('');
    }
    return (
        <InputContainer>
            <InputField type='text' placeholder='Guess the Character' value={value} onChange={handleChange}/>
            <SendButton title="Send" onClick={handleSend}>
                <PaperPlaneRight size={40} color='#C03221' weight='fill'/>
            </SendButton>
        </InputContainer>
    )
};