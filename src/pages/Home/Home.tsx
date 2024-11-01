
import { 
    HomeContainer,
    Title,
    HomeTitle
} from './styles';
import { Input } from '../../components/Input/Input';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';
import { Feather } from '@phosphor-icons/react';
export const Home = () => {
    return (
        <HomeContainer>
            <HomeTitle>
                <Title>HUNGERDLE</Title>
                <Feather size={68} color='#C03221' weight='fill'/>
            </HomeTitle>
            <Input />
            <HeaderTable />
        </HomeContainer>
    )
};