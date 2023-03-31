import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Link } from "react-router-dom";

const Result = ({ props, name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  console.log(props);
  return (
    <div className="result">
      <span className="title">
        Final Score : {score} {name}{" "}
      </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <>
        <Link
          to={{
            pathname: "/Home",
            state: name,
          }}
        ></Link>
      </>
    </div>
  );
};

export default Result;
