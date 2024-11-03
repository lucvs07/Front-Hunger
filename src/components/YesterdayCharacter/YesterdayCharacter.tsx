import { 
    YesterdayCharacterContainer,
    Image,
    Title,
    Subtitle
 } from "./styles";

interface YesterdayCharacterProps {
    img: string;
    name: string;
}
export const YesterdayCharacter = ({img, name} : YesterdayCharacterProps) => {
    return (
        <YesterdayCharacterContainer>
            <Title>Yesterday Character</Title>
            <Image src={img} alt="Character" />
            <Subtitle>{name}</Subtitle>
        </YesterdayCharacterContainer>
    );
};