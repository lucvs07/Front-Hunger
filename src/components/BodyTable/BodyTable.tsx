import { 
    BodyTableContainer,
    ContentTable,
    TextContent
 } from "./styles";
export const BodyTable = () => {
    return (
        <BodyTableContainer>
            <ContentTable type={'img'}>
            </ContentTable>
            <ContentTable type={'correct'}>
                <TextContent>Katniss Everdeen</TextContent>
            </ContentTable>
            <ContentTable type={'incorrect'}>
                <TextContent>Tribute</TextContent>
            </ContentTable>
            <ContentTable type={'similar'}>
                <TextContent>Bow</TextContent>
            </ContentTable>
            <ContentTable type={'incorrect'}>
                <TextContent>District 12</TextContent>
            </ContentTable>
            <ContentTable type={'incorrect'}>
                <TextContent>Female</TextContent>
            </ContentTable>
            <ContentTable type={'incorrect'}>
                <TextContent>Hunger Games</TextContent>
            </ContentTable>
        </BodyTableContainer>
    )
};