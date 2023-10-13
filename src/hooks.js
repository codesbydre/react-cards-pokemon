import { useState } from "react";
import axios from "axios";

function useFlip(initialState = true) {
  const [isFlipped, setIsFlipped] = useState(initialState);

  const toggleFlip = () => {
    setIsFlipped((isUp) => !isUp);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addDataFromURL = async (urlSuffix = "") => {
    const response = await axios.get(`${baseUrl}${urlSuffix}`);
    setData((data) => [...data, response.data]);
  };

  return [data, addDataFromURL];
}

export { useFlip, useAxios };
