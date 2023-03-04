import React, { useState, useCallback } from "react";
import LiterLine from "./line";
import ActiveLine from "./activeLine";
import getRandomWord from "./words";
import "./style.css";

export default function App() {
  const [correctWord, setCorrectWord] = useState(getRandomWord());
  const [histroyAnswer, setHistroyAnswer] = useState<string[]>([]);
  const [succeed, setSucceed] = useState(false);
  const getReceivedData = useCallback(
    (data: string) => {
      if (data === correctWord) {
        setSucceed(true);
      }
      histroyAnswer.push(data);
      setHistroyAnswer([...histroyAnswer]);
    },
    [histroyAnswer, setSucceed, setHistroyAnswer, correctWord]
  );
  return (
    <div className="wordle">
      <div className="wrap">
        {histroyAnswer.map((itm: string, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <LiterLine key={itm + idx} correct={correctWord} current={itm} />
        ))}
        {histroyAnswer.length <= 5 && !succeed && (
          <ActiveLine
            length={correctWord.length || 0}
            onReceive={getReceivedData}
          />
        )}
        {succeed && <div>well down!</div>}
      </div>
    </div>
  );
}
