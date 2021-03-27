import { Container } from './styles';

import { UseTransactions } from '../../hooks/UseTransactions';


export function TransactionsTable(){
 

    const {transactions} = UseTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction =>(
                        <tr key={transaction.id}>
                        <td className="title">{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createdAd)
                        )}</td>
                    </tr>
                    ))}
                </tbody>

            </table>
        </Container>

       
    )
}