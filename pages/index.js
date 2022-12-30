import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Jean Masvi </title>
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
      <h1>Hi there, 👋</h1>
      <p className={styles.grid}>
        My name is Jean and I am a software engineer with a background
        in Internet Systems. I have a passion for front-end development and have
        experience working with various frameworks, including Vue, React, Next,
        and Angular. Currently, I am working as a front end engineer at a big
        retail company in Brazil where I utilize React, Next, and GraphQL on a
        daily basis. I am always looking to learn and grow as a developer, and
        am excited to see what the future holds for me in this ever-evolving
        field. =)
      </p>
      <div className={styles.links}>
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
      </div>
    </main>
  </div>
);

export default Home;
