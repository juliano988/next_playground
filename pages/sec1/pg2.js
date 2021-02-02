import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';

export default function Pg2() {

    const [mount, setMount] = useState(false);
    const [cep, setCep] = useState('');

    useEffect(function () {
        if (mount === false) {
            setMount(true);
        }
    });

    const handleChangeCep = function (e) {
        // is Number && is not backward && is not space
        if (Number(e.nativeEvent.data) >= 0 && e.nativeEvent.inputType === 'insertText' && e.nativeEvent.data !== ' ') {
            if (e.target.value.length === 5) {
                setCep(e.target.value + '-');
            } else {
                setCep(e.target.value);
            }
            // delete last character if backward was pressed
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setCep(e.target.value.substring(0));
            // allows to fill the input with memorized data
        } else if (e.nativeEvent.data === undefined) {
            setCep(e.target.value.substring(0, 5) + '-' + e.target.value.substring(5))
        }
    }

    const handleClickSend = function () {
        fetch('https://viacep.com.br/ws/' + cep.replace('-', '') + '/json/')
            .then(function (res) {
                return res.json();
            }).then(function (address) {
                console.log(address)
            }).catch(function(error){
                alert('ERRO: Requisição mau sucedida.\nFavor verificar o CEP e sua conexão com a internet.')
            })
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Next.js Playground - Get Your Address</title>
            </Head>
            <header>
                <h1>Get Your Address</h1>
            </header>
            <main>
                <label htmlFor="cep">Enter your CEP:</label>
                <input id="cep" type="text" maxLength="9" onChange={handleChangeCep} value={cep}></input>
                <button type="button" onClick={handleClickSend}>SEND</button>
            </main>
        </>
    );
}