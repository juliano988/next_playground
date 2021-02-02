import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Pg2() {

    const [mount, setMount] = useState(false)

    useEffect(function () {
        if (mount === false) {
            setMount(true);


        }
    });

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
            </main>

        </>
    )
}