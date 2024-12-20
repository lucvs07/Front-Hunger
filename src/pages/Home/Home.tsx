
import { 
    HomeContainer,
    GameContainer,
    Title,
    HomeTitle,
    TableContainer,
    Linha
} from './styles';
import { Input } from '../../components/Input/Input';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';
import { BodyTable } from '../../components/BodyTable/BodyTable';
import { YesterdayCharacter } from '../../components/YesterdayCharacter/YesterdayCharacter';
import { FinalCharacter } from '../../components/FinalCharacter/FinalCharacter';
import { Footer } from '../../components/Footer/Footer';
import { Feather } from '@phosphor-icons/react';
import { useEffect, useState, useRef} from 'react';
import victorySound from '../../assets/panem_anthem.mp3'
// API
//const API = import.meta.env.VITE_API_BASE_URL;
// Interface Characters
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

export const Home = () => {
    // Ref
    const audioRef = useRef(new Audio(victorySound));
    // States
    const [dailyCharacter, setDailyCharacter] = useState<Character | null>(null);
    const [lastCharacter, setLastCharacter] = useState<Character | null>(null);
    const [allCharacters, setAllCharacters] = useState<Character[] | null>(null);
    const [final, setFinal] = useState(false);
    const [tentativas, setTentativas] = useState(1);
    const [isExiting, setIsExiting] = useState(false);
    const [history, setHistory] = useState<{ character: Character, comparison: { name: string, occupation: string, weapon: string, house: string, gender: string, appearance: string } }[]>([]);

    useEffect(() => {
        fetch('/characters/last')
          .then(response => response.json())
          .then(data => {
            if (data && !data.message) {
              setLastCharacter(data);
            } else {
              setLastCharacter(null)
            }
          });
      }, []);

    useEffect(() => {
        fetch('/characters/daily')
          .then(response => response.json())
          .then(data => {
            if (data) {
              setDailyCharacter(data);
            }
          });
      }, []);

    useEffect(() => {
        fetch('/characters')
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data)) {
              setAllCharacters(data);
            }
          });
      }, []);

    type OptionType = { value: string }; // Define OptionType
    const handleSend = (selectedValue: OptionType['value'] | null) => {
        const foundCharacter = allCharacters?.find((character: Character) => character.name === selectedValue);
        if (foundCharacter && dailyCharacter) {
            setTentativas(tentativas+1)
            const comparison = {
                name: foundCharacter.name === dailyCharacter.name ? 'correct' : 'incorrect',
                occupation:
                    foundCharacter.occupation.every((occ) => dailyCharacter.occupation.includes(occ))
                        ? 'correct'
                        :  foundCharacter.occupation.some(occ => dailyCharacter.occupation.includes(occ)) ? 'similar' : 'incorrect',
                weapon: 
                    foundCharacter.weapon.every((wpn) => dailyCharacter.weapon.includes(wpn))
                        ? 'correct'
                        :  foundCharacter.weapon.some(wpn => dailyCharacter.weapon.includes(wpn)) ? 'similar' : 'incorrect',
                house: foundCharacter.house === dailyCharacter.house ? 'correct' : 'incorrect',
                gender: foundCharacter.gender === dailyCharacter.gender ? 'correct' : 'incorrect',
                appearance: foundCharacter.appearance === dailyCharacter.appearance ? 'correct' : 'incorrect'
            };
            setHistory((prev) => [...prev, { character: foundCharacter, comparison }]);
        }
        if (foundCharacter?.name === dailyCharacter?.name){
          setIsExiting(true)
          console.log('Tentativas: ', tentativas)
          setTimeout(() =>{
            setFinal(true)
            audioRef.current.play();
          }, 500)
        }

    };
    
    return (
        <HomeContainer>
            <HomeTitle>
                <Title>HUNGERDLE</Title>
                <Feather size={68} color='#C03221' weight='fill'/>
            </HomeTitle>
            {
              final?(
                <>
                  <FinalCharacter
                    img={dailyCharacter?.img || ''}
                    name={dailyCharacter?.name || ''}
                    tentativas={tentativas}
                  />

                </>
              ) : (
                <GameContainer exit={isExiting ? "True" : undefined}>
                  <Input onSend={handleSend} allCharacters={allCharacters}/>
                  <TableContainer>
                      <HeaderTable />
                      <BodyTable history={history}/>
                  </TableContainer>
                </GameContainer>
                
              )
            }
            
            <Linha />
            { lastCharacter && (
                <YesterdayCharacter
                  img={lastCharacter?.img || ''}
                  name={lastCharacter?.name || ''}
                />
              )
            }
            
            <Footer />
        </HomeContainer>
    )
};