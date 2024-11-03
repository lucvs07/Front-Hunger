import React from "react";
import { 
    BodyTableContainer,
    ContentTable,
    TextContent
 } from "./styles";
interface Character {
    name: string;
    occupation: string[];
    weapon: string[];
    house: string;
    gender: string;
    appearance: string;
    img: string;
}
interface HistoryItem {
    character: Character;
    comparison: {
        name: string;
        occupation: string;
        weapon: string;
        house: string;
        gender: string;
        appearance: string;
    };
}

interface BodyTableProps {
    history: HistoryItem[];
}
export const BodyTable = ({history} : BodyTableProps) => {
    return (
        <BodyTableContainer>
            {
                history.map((item, index) => (
                    <React.Fragment key={index}>
                        <ContentTable type="img" style={{ backgroundImage: `url(${item.character.img})`}}>
                        </ContentTable>
                        <ContentTable type={item.comparison.name as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.name}</TextContent>
                        </ContentTable>
                        <ContentTable type={item.comparison.occupation as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.occupation.join(', ')}</TextContent>
                        </ContentTable>
                        <ContentTable type={item.comparison.weapon as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.weapon.join(', ')}</TextContent>
                        </ContentTable>
                        <ContentTable type={item.comparison.house as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.house}</TextContent>
                        </ContentTable>
                        <ContentTable type={item.comparison.gender as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.gender}</TextContent>
                        </ContentTable>
                        <ContentTable type={item.comparison.appearance as "correct" | "incorrect" | "similar"}>
                            <TextContent>{item.character.appearance}</TextContent>
                        </ContentTable>
                        
                    </React.Fragment>
                ))
            }
            
        </BodyTableContainer>
    )
};