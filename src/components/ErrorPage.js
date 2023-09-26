import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  //console.log(error);
  return (
    <div className="error-page">
      <h1>Uh ohh! You landed into a wrong page</h1>
      <p>Pleage enter correct url</p>
      <p>{error.data}</p>
      <p>
        {error.status} : {error.statusText}
      </p>
    </div>
  );
};
export default ErrorPage;
