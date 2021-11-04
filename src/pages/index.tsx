import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | bnews</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about <span>*something*</span></h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>

        <img src="/images/avatar.png" alt="Girl Coding" height="500px" style={{marginRight: "2rem"}}/>
      
      </main>
    </>
    
  );
}
