import React, { createFactory, useCallback } from "react";
import clsx from "clsx";
import "./style.css";

interface Props {
  current: string;
  correct: string;
}

export default function Line(props: Props) {
  // eslint-disable-next-line no-shadow
  enum LiterClrs {
    green,
    yellow,
    grey,
  }
  const { current, correct } = props;
  const getLiterStatus: any = useCallback(
    (liter: string, idx: number) =>
      // eslint-disable-next-line no-nested-ternary
      liter === correct[idx] ? 0 : correct.includes(liter) ? 1 : 2,

    [correct]
  );

  return (
    <div>
      {current.split("").map((itm: string, idx: number) => (
        <input
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={clsx(
            "liter",
            `${LiterClrs[getLiterStatus(itm, idx)]}Liter`
          )}
          maxLength={1}
          value={itm}
          disabled
        />
      ))}
    </div>
  );
}
