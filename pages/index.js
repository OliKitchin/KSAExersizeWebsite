import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Image from "next/image"
import profilePic from '../public/1629794746074_1.png'
import mailIcon from "../public/email.svg"
import mediumIcon from "../public/medium.svg"
import linkedinIcon from "../public/5282542_linkedin_network_social network_linkedin logo_icon.svg"
import twitterIcon from "../public/104501_twitter_bird_icon.svg"

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Oli Kitchin</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <section class={styles.nav}>
        <ul class={styles.navlist}>
            <li class={styles.navlistitem}><Link href="/">Home</Link></li>
            <li class={styles.navlistitem}><Link href="/writing">Writing</Link></li>
            <li class={styles.navlistitem}><Link href="/5a141841-32fc-4812-9900-f07e91cbe2a6">Scrapbook</Link></li>
          </ul>
        </section>
        <section className={styles.maincontent}>
          <div className={styles.homepagecontent}>
          <Image className={styles.logos}
            height="150"
            width="150"
            src={profilePic}
            />
          <h1>Oli Kitchin</h1>
          <p>
          Cyber Risk Consultant @ Deloitte. Passionate about people, technology and the great outdoors. 
          </p>
          <div className={styles.socialsbox}>
            
            <a href="mailto:oli.kitchin@outlook.com"><Image src={mailIcon} width="32" height="32" quality="100"></Image></a>
            <a href="https://www.linkedin.com/in/oli-kitchin-3108a714a/"><Image src={linkedinIcon} width="32" height="32"></Image></a>
            <a href="https://medium.com/@olikitchin"><Image src={mediumIcon} width="32" height="32" ></Image></a>
            <a href="https://twitter.com/olikitchin"><Image src={twitterIcon} width="32" height="32" ></Image></a>
          </div>
          <h3>My Experience</h3>
          <hr></hr>
          <p>I’m currently working as a Cyber Risk Consultant for Deloitte after graduating from the University of Exeter with a 1st in Computer Science.</p>
          <p>Previously I’ve worked the outdoor education industry for The Bushcraft Company where I ran residential courses to inspire a passion for the outdoors in the next generation.</p>
          <h3>What you'll find here</h3>
          <hr></hr>
          <p><Link href="/writing">Writing</Link> - Ramblings on anything that’s caught my interest</p>
          <p><Link href="/5a141841-32fc-4812-9900-f07e91cbe2a6">Scrapbook</Link> - Snippits and Takeaways from the best content I’ve come across</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
