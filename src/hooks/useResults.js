import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (sarchTerm) => {
    try {
      setErrorMessage("");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: sarchTerm,
          location: "warsaw",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong...");
    }
  };

  useEffect(() => {
    searchApi("makaron");
  }, []);

  return [searchApi, results, errorMessage];
};
