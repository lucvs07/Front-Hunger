
import { 
    HomeContainer,
    Title,
    HomeTitle,
    TableContainer,
    Linha
} from './styles';
import { Input } from '../../components/Input/Input';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';
import { BodyTable } from '../../components/BodyTable/BodyTable';
import { YesterdayCharacter } from '../../components/YesterdayCharacter/YesterdayCharacter';
import { Footer } from '../../components/Footer/Footer';
import { Feather } from '@phosphor-icons/react';
export const Home = () => {
    return (
        <HomeContainer>
            <HomeTitle>
                <Title>HUNGERDLE</Title>
                <Feather size={68} color='#C03221' weight='fill'/>
            </HomeTitle>
            <Input />
            <TableContainer>
                <HeaderTable />
                <BodyTable />
            </TableContainer>
            <Linha />
            <YesterdayCharacter />
            <Footer />
        </HomeContainer>
    )
};