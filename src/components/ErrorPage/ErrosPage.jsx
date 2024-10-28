import { Link, useRouteError } from "react-router-dom";

const ErrosPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <br />
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back where you are form</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrosPage;
