import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ErrorPage from "next/error";

import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";

export default function Post() {
  const [post, setPost] = useState();
  const router = useRouter();

  const { slug } = router.query;
  // TODO
  const schemaName = "schemaName";

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api//storage/${schemaName}/${slug}`
      );

      setPost(data.result);
    })();
  }, []);

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {post && (
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <PostHeader title={post.title} coverImage={post.picture} />
                <PostBody content={post.post} />
              </article>
            </>
          )}
        </Container>
      )}
    </Layout>
  );
}
