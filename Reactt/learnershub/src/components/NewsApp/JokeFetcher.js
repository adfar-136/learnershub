import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

function JokeFetcher() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);
  const getJoke = async () => {
    setLoading(true);
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
    setLoading(false);
  };
  const handleClick = async () => {
    setLoading(true);
    await getJoke();
  };
  return (
    <div>
      <StyledButton onClick={handleClick}>Generate Joke</StyledButton>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </>
      )}
    </div>
  );
}

export default JokeFetcher;