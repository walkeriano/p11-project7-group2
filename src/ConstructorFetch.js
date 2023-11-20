import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
  });
  const getFetch = async () => {
    const baseUrl = "http://localhost:5000/";
    const resp = await fetch(`${baseUrl}${url}`);
    const data = await resp.json();
    setState({ data });
  };
  useEffect(() => {
    getFetch();
  }, [url]);
  return {
    data: state.data,
  };
};
