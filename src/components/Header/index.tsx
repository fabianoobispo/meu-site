import logoImg from '../../assets/logo.svg';
import { Container ,Content} from './styles';

interface HeaderProps{
    onleOpenNewTransactionModal : () => void;
}


export function Header({onleOpenNewTransactionModal}: HeaderProps) {    
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt maney" />
            <button type="button" 
            onClick={onleOpenNewTransactionModal}>
                Nova transação
            </button>       

            </Content>

        </Container>
    )
}