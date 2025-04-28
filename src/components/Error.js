import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <p>{error.data}</p>
      <p>
        {error.status}: {error.statusText}
      </p>
    </div>
  );
};

export default Error;
