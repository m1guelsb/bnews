import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>bnews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome!</span>
          <h1>
            News about the
            <br />
            <span>WEB DEV. WORLD</span>
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl Coding"
          height="500px"
          width="380px"
        />
      </main>
    </>
  );
}

//data collect in a static render thats update by the time interval that is defined
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    'price_1K1rZNGuSk8YFtsyH6p5V0EG',
    {
      expand: ['product']
    }
  );

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };

  return {
    props: {
      product
    },
    //how much times (secs) the page will be revalidated
    revalidate: 60 * 60 * 24 //24 hours
  };
};
