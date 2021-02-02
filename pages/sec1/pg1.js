import { useEffect, useState, useRef } from 'react';
import Head from 'next/head'
import styles from '../../styles/sec1_Pg1.module.scss';

export default function Pg1() {

    const [mount, setMount] = useState(false);

    const contentDiv = useRef(null);
    const julioFariaDivRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(function () {
        //Executes only once
        if (mount === false) {
            setMount(true);
            let julioPhoto = document.createElement('img');
            julioPhoto.setAttribute('class', styles.julio_photo);
            julioPhoto.setAttribute('src', '/imgs/julio.jpeg');
            julioPhoto.setAttribute('alt', 'Júlio photo');
            if (window.innerWidth <= 576) {
                julioFariaDivRef.current.insertBefore(julioPhoto, infoRef.current);
            } else {
                contentDiv.current.appendChild(julioPhoto);
            }
        }
    });

    return (
        <div ref={contentDiv} className={styles.center_content}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Next.js Playground - Who am I?</title>
            </Head>
            <div ref={julioFariaDivRef}>
                <header>
                    <h1>Júlio Faria</h1>
                </header>
                <p ref={infoRef}>I graduated as a <b>Computer Technician</b> from <a href="https://www.cotemig.com.br/">COTEMIG</a> in
                2013 and in <b>Electronic and Telecommunications
                  Engineering</b> from <a href="https://www.pucminas.br/">PUC Minas</a> in 2020. I am currently
                specializing in Full Stack web development on
                <a href="https://www.freecodecamp.org/news/about/" target="_blank">Free Code Camp</a> community.<br />
                I can easyly deal with new technologies and I am always willing to learn new things and in different
                areas. I am also proactive and try to relate well with people, despite being a little shy.
              </p>
                <p>Check out my complete profile on <a
                    href="https://br.linkedin.com/in/j%C3%BAlio-faria-144832145?trk=profile-badge"
                    target="_blank">Linkedin!</a>
                </p>
            </div>
        </div>
    )
}