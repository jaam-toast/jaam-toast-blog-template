import Link from "next/link";

const PostPreview = ({ title, slug, post }) => {
  return (
    <div className="flex flex-col ">
      <h3 className="title">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="truncate whitespace-nowrap">{post}</p>
    </div>
  );
};

export default PostPreview;
