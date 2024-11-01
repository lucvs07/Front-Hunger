import { 
    HeaderTableContainer,
    HeaderTableTitle
 } from "./styles";
export const HeaderTable = () => {
    const atributes = ['Character', 'Name', 'Occupation', 'Weapon', 'House', 'Gender', 'Appearance']
    return (
        <HeaderTableContainer>
            {
                atributes.map((title, index) => (
                    <HeaderTableTitle key={index}>{title}</HeaderTableTitle>
                ))
            }
        </HeaderTableContainer>
    )
};