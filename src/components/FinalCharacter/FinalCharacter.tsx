import { 
    YesterdayCharacterContainer,
    Image,
    Title,
    Subtitle
 } from "./styles";

interface YesterdayCharacterProps {
    img: string;
    name: string;
    tentativas: number;
}
export const FinalCharacter = ({img, name, tentativas} : YesterdayCharacterProps) => {
    return (
        <YesterdayCharacterContainer>
            <Title>Congratulations !</Title>
            <Image src={img} alt="Character" />
            <Subtitle>{name}</Subtitle>
            <Subtitle>{tentativas} Attempts</Subtitle>
        </YesterdayCharacterContainer>
    );
};