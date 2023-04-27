import { useEffect, useState } from "react";
import axios from "axios";

import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  const [posts, setPosts] = useState();

  // TODO
  const schemaName = "schemaName";

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api/storage/${schemaName}`
      );

      if (!data) return;

      setPosts(data.result);
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <div className="container mx-auto px-5">
        <div className="px-5">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog.
          </h1>
          <HeroPost />
        </div>
        {posts && <MoreStories posts={posts} />}
      </div>
    </Layout>
  );
}
