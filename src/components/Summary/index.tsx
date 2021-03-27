import React from 'react';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';


import { Container } from "./styles";

import { UseTransactions } from '../../hooks/UseTransactions';

export function Summary() {
const {transactions} = UseTransactions();

const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount
    }else{
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount
    }
    return acc;
}, {
    deposits: 0,
    withdraws: 0,
    total : 0,
})

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="Entrada"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saida"/>
                </header>
                <strong>  
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="fundo">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(summary.total)}
                </strong>
            </div>

        </Container>
    )
}