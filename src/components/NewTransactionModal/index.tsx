import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

import { UseTransactions } from '../../hooks/UseTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = UseTransactions();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategorry] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
           title,
           category,
           type,
           amount
        
        })

        setTitle('');
        setAmount(0);
        setCategorry('');
        setType('deposit');


        onRequestClose()
    }

    return(
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <button type="button" onClick={onRequestClose} className="react-modal-close" >
                        <img src={closeImg} alt="Fechar modal" />
                    </button>
                <Container
                    onSubmit={handleCreateNewTransaction}
                >

                    <h2>Cadastrar operação</h2>

                    <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />
                    <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    />

                    <TransactionTypeContainer>  
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit')}} 
                        isActive={type === 'deposit'}
                        activeColor="green"   
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw')}}  
                        isActive={type === 'withdraw'}     
                        activeColor="red"   
                    >
                        <img src={outcomeImg} alt="Saida" /> 
                        <span>Saída</span>  
                    </RadioBox>

                    </TransactionTypeContainer>

                    <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategorry(event.target.value)}
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>
            </Modal>
    );
}