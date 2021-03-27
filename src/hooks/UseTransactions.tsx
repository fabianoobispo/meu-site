import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';


interface Transactions{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAd: string;
}
type TransactionInput = Omit<Transactions, 'id' | 'createdAd'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transactions: TransactionInput) => Promise<void> 
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionProvider({ children }:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAd: new Date(),
        })
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);

    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    )
}

export function UseTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}