import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Container from "./Container";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import classNames from "classnames";

const test = [
  {
    picture:
      "https://user-images.githubusercontent.com/59520911/205429514-5171a3f9-e0cd-47e9-985a-5a190060d619.svg",
    title: "testtt",
    slug: "testet",
    post: "asfsasdfsdfsdffdsafddf",
  },
];

export default function Post() {
  const [posts, setPosts] = useState(test[0]);

  const schemaName = "posts";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.dmFjaGVsaW4.3iS1QS2ZRi2ymT_BW3g3Y8LhdMC-eZPTEzUR2bKv8Jw";

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api/storage/${schemaName}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data);

      if (!data) return;

      setPosts(data.result);
    })();
  }, []);

  return (
    <Layout>
      {posts && (
        <Container>
          <article className="mb-32">
            {/* <PostHeader title={posts.title} coverImage={posts.picture} /> */}
            <>
              <h2 className="text-xl py-5">{posts.title}</h2>
              <div className="mb-8 md:mb-16 sm:mx-0">
                <div className="sm:mx-0">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MlatNnQUaDRjxlh35YVZRg.png"
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
