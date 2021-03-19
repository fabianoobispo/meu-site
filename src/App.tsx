import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

//para melhorar a asecibilidade
Modal.setAppElement('#root');
//


export function App(){
    const [ isNewTransactionOpen,  setIsNewTransactionOpen] =  useState(false);
    
    function handleOpenNewTransactionModal(){
        setIsNewTransactionOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionOpen(false);        
    }
    return (
        <>     
            <Header onleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard />

            <NewTransactionModal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal}/>
           
            <GlobalStyle />
   
        </>
    )
}