import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Jean Masvi</title>
      <meta
        name="description"
        content="My name is Jean Masvi, and I'am a Frontend Engineer and this is my website"
      />
      <link
        rel="icon"
        href="https://www.linkedin.com/in/jean-masvi-80071134/"
      />
    </Head>

    <main className={styles.main}>
      <h1>Hi,</h1>
      <p className={styles.grid}>
        My name is Jean Masvi, I`ve ben working with frontend for the last 4
        years, and switching between frameworks like Angular, Vue and most
        recently React (and Next JS). Today I`m work as a Frontend Engineer in
        retail company using daily React, Next GraphQl and a lot of based
        Javascript. Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
      <>
        <ul>
          <li>
            <a
              alt="Linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/jean-masvi-80071134/"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              alt="GitHub"
              target="_blank"
              href="https://github.com/Masvi"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li alt="Jean Masvi">jeanmasvi@gmail.com</li>
        </ul>
      </>
    </main>
  </div>
);

export default Home;
