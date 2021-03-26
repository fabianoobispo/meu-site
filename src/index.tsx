import React from 'react';
import ReactDOM from 'react-dom';
//servidor api
import{ createServer, Model } from 'miragejs';
//
import { App } from './App';


//servidor api
createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
            {
                id:1,
                title:'aaaaaaaaaa',
                type: 'deposit',

                category:'dev',
                amount:60000,
                createdAd: new Date('2020-02-02 09:00:00'),
            },
            {
                id:2,
                title:'aabbbbbbbbbaaaaaaaa',
                type: 'withdraw',

                category:'dev',
                amount:60000,
                createdAd: new Date('2020-03-02 09:00:00'),
            }
            ]
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        })
        this.post('/transactions', (schema, request) => {
           const data = JSON.parse(request.requestBody);

           return schema.create('transaction', data);
            
        })
    }
})
//

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)