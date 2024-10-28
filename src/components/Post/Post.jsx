import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
    margin: "10px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h3>Post of id: {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show details</button>
      </Link>
      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

export default Post;
