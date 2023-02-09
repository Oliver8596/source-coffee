import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export const ErrorPage: React.FC = function () {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles["error-page"]}>
        <br />
        <h1>Oops!</h1>
        <br />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{<i>{error.statusText || error.data}</i>}</p>
      </div>
    );
  } else {
    return (
      <div className={styles["error-page"]}>
        <br />
        <h1>Oops!</h1>
        <br />
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
};
