import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <link rel="icon" href="/favicon.ico" />
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
        <header className={styles.header}>
          <h1 >Writing</h1>
          <p>
            A collection of ramblings on anything that's had my attention. Those things tend to be linked to technology, people or productivity in some way.
          </p>
        </header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.filter(post => (post.id != "5a141841-32fc-4812-9900-f07e91cbe2a6" && post.id != "710e2a1c5214414a8302e3677020a3f8")).map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <p className={styles.postDescription}>{date}</p>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>
              </li>
            );
          })}
        </ol>
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
