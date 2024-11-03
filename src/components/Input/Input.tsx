import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState, useEffect} from "react";
import { 
    InputContainer,
    SendButton
 } from "./styles";
import Select, { SingleValue, StylesConfig } from "react-select";

interface InputProps {
    onSend: (selectedValue: OptionType['value'] | null) => void;
    allCharacters: Character[] | null;
}
interface Character {
    id: string;
    name: string;
    occupation: string[];
    weapon: string[];
    house: string;
    appearance: string;
    gender: string;
    img: string;
    isSelected: boolean;
    lastSelectedDate: string;
}
interface OptionType {
    label: string;
    value: string;
}
export const Input = ({ onSend, allCharacters} : InputProps) => {
    const [options, setOptions] = useState<OptionType[]>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<OptionType | null>(null);
    useEffect(() => {
        if (allCharacters) {
            const characterOptions = allCharacters.map(character => ({
                label: character.name,
                value: character.name,
            }));
            setOptions(characterOptions);
        }
    }, [allCharacters]);

    const handleSelect = (selectedOption: SingleValue<OptionType>) => {
        setSelectedCharacter(selectedOption);
        console.log("Personagem selecionado:", selectedOption);
    };


    const handleSend = () => {
        onSend(selectedCharacter?.value || null);
        setSelectedCharacter(null);
    }
    const customStyles: StylesConfig<OptionType, false> = {
        control: (provided) => ({
            ...provided,
            display: "flex",
            minWidth: "600px",
            padding: "1rem 48px 1rem 1rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            borderRadius: "8px 0px 0px 8px",
            border: "4px solid $snow",
            borderColor: "$snow",
            boxShadow: "none",
            color: "$timber",
            fontFamily: "$russo",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            background: "transparent",
            "&:hover": {
            borderColor: "#ffffff", // Cor do hover para a borda
            },
        }),
        input: (provided) => ({
            ...provided,
            color: "$timber", // Cor do texto no input
            fontFamily: "'Russo One', sans-serif",
            fontSize: "2rem",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "$timber",
            fontFamily: "'Russo One', sans-serif",
            fontSize: "2rem",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "$timber",
            fontFamily: "'Russo One', sans-serif",
            fontSize: "2rem",
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "8px",
            backgroundColor: "#333", // Cor de fundo do menu
            marginTop: "0.5rem",
        }),
        menuPortal: (provided) => ({
            ...provided,
            zIndex: 9999,
            color: "$timber",
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "$timber" : "$timber", // Cor do texto
            backgroundColor: state.isSelected ? "#C03221" : "transparent", // Fundo vermelho quando selecionado
            fontFamily: "'Russo One', sans-serif",
            fontSize: "2rem",
            "&:hover": {
                backgroundColor: "#C03221", // Cor de fundo no hover
                color: "$timber",
            },
        }),
    }
    return (
        <InputContainer>
            <Select<OptionType, false> // Passa o tipo genérico explicitamente
            options={options}
            value={selectedCharacter}
            onChange={handleSelect}
            placeholder="Selecione um personagem..."
            isClearable
            isSearchable // Permite a pesquisa pelo nome do personagem
            classNamePrefix="character-select" // Adiciona uma classe CSS prefixada (opcional para customizar estilos)
            styles={customStyles} // Aplica os estilos customizados
            menuPortalTarget={document.body} // Renderiza o menu fora do componente
            menuPosition="fixed" // Posiciona o menu fixo
        />
            <SendButton title="Send" onClick={handleSend}>
                <PaperPlaneRight size={40} color='#C03221' weight='fill'/>
            </SendButton>
        </InputContainer>
    )
};