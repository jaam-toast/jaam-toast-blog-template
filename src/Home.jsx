import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import HeroPost from "./components/HeroPost";
import MoreStories from "./components/MoreStories";
import PostPreview from "./components/PostPreview";

const schemaName = "posts";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImphYW0tdG9hc3QtYmxvZyIsImlhdCI6MTY4MjY2MDA1N30.0wERiY_GrTVAZqRwm2qNAZkc_oErq7KiKLpsKM-W4yU";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImphYW0tdG9hc3QtYmxvZzIiLCJpYXQiOjE2ODI2Njc5NjJ9.fWfht2DUUOllTNir5oHtnOCgfb0dy8glT8G7Qmu7ioU";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api/storage/${schemaName}/contents`,
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
      <div className="container mx-auto px-5">
        <div className="px-5">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog.
          </h1>
          <HeroPost />
        </div>
        {posts && (
          <section className="p-5">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {posts.map((post) => (
                <PostPreview
                  title={post.title}
                  key={post._id}
                  id={post._id}
                  slug={post._id}
                  post={post.post}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
