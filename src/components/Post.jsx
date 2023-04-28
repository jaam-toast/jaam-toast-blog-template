import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Container from "./Container";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import classNames from "classnames";
import { useParams } from "react-router-dom";

const schemaName = "posts";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImphYW0tdG9hc3QtYmxvZyIsImlhdCI6MTY4MjY2MDA1N30.0wERiY_GrTVAZqRwm2qNAZkc_oErq7KiKLpsKM-W4yU";

export default function Post() {
  const params = useParams();
  const { id } = params;
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api/storage/${schemaName}/contents/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log({ data });

      if (!data) return;

      setPosts(data.result);
    })();
  }, []);

  return (
    <Layout>
      {posts && (
        <Container>
          <article className="mb-32">
            <>
              <h2 className="text-xl py-5">{posts.title}</h2>
              <div className="mb-8 md:mb-16 sm:mx-0">
                <div className="sm:mx-0">
                  <img
                    src={posts.picture}
                    alt={`Cover Image for ${posts.title}`}
                    className={
                      "shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
                    }
                    width={1300}
                    height={630}
                  />
                </div>
              </div>
            </>
            <PostBody content={posts.post} />
          </article>
        </Container>
      )}
    </Layout>
  );
}
