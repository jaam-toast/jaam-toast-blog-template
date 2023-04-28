import { useNavigate } from "react-router-dom";

const PostPreview = ({ title, slug, post, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hi/${id}`);
  };

  return (
    <div className="flex flex-col pointer-cursor ">
      <h1 className="title">
        <div
          className="hover:underline pointer-cursor border"
          onClick={handleClick}
        >
          {title}
        </div>
      </h1>
      <p className="truncate whitespace-nowrap">{post}</p>
    </div>
  );
};

export default PostPreview;
