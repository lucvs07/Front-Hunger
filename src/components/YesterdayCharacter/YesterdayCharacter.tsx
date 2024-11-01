import { 
    YesterdayCharacterContainer,
    Image,
    Title,
    Subtitle
 } from "./styles";
export const YesterdayCharacter = () => {
    return (
        <YesterdayCharacterContainer>
            <Title>Yesterday Character</Title>
            <Image src="https://recreio.com.br/media/_versions/filmes/jogos_vorazes_arena_capa_widelg.jpg" alt="Character" />
            <Subtitle>#12 Katniss Everdeen</Subtitle>
        </YesterdayCharacterContainer>
    );
};