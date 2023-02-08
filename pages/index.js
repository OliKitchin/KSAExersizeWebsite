import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image"
import profilePic from '../public/selfie-image.jpg'
import mailIcon from "../public/email.svg"
import mediumIcon from "../public/medium.svg"
import linkedinIcon from "../public/5282542_linkedin_network_social network_linkedin logo_icon.svg"
import twitterIcon from "../public/104501_twitter_bird_icon.svg"


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>David</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <section class={styles.nav}>
        <ul class={styles.navlist}>
            <li class={styles.navlistitem}><Link href="/">Home</Link></li>
          </ul>
        </section>
        <section className={styles.maincontent}>
          <div className={styles.homepagecontent}>
          <Image className={styles.logos}
            height="150"
            width="150"
            src={profilePic}
            />
          <h1>David Smith</h1>
          <p> Software Developer. Passionate about technology and hiking.
          </p>
          <div className={styles.socialsbox}>
            
            <a href="mailto:hi@david.com"><Image src={mailIcon} width="32" height="32" quality="100"></Image></a>
            <a href="https://www.linkedin.com/"><Image src={linkedinIcon} width="32" height="32"></Image></a>
            <a href="https://medium.com/"><Image src={mediumIcon} width="32" height="32" ></Image></a>
            <a href="https://twitter.com/"><Image src={twitterIcon} width="32" height="32" ></Image></a>
          </div>
          <h3>My Experience</h3>
          <hr></hr>   
          <p>I’m currently working on an awesome project that's using AI to keep people safe. I can't wait to tell everyone more about it!</p>
          </div>
        </section>
      </main>
    </div>
  );
}