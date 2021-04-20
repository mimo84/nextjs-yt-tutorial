import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Go to my own{' '}
        <Link href="/personal">
          <a>Personal Page</a>
        </Link>
      </div>
    </div>
  );
}
