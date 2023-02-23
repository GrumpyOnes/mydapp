import React, { useRef, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import "./style.css";

interface Props {
  length: number;
  onReceive: (data: string) => void;
}
export default function ActiveLine(props: Props) {
  const { length, onReceive } = props;
  const ref = useRef<any>();

  const [data, setData] = useState(new Array(length).fill(""));
  useEffect(() => {
    if (data.filter((i) => i).length === 0) {
      ref.current?.children?.[0]?.focus();
    }
  }, [data, ref.current?.children?.[0]]);
  const onChange = useCallback(
    (idx: number) => (e: any) => {
      const val: string = (e.target.value || "").toLowerCase();
      data[idx] = val;
      setData([...data]);
      if (val) {
        ref.current?.children?.[idx]?.blur();
        if (idx < ref.current?.children?.length) {
          ref.current?.children?.[idx + 1]?.focus();
        }
      }
    },
    [data, ref.current]
  );
  useEffect(() => {
    const _data = data.filter((itm) => itm);
    if (_data.length >= length) {
      onReceive(_data.join(""));
      setData(new Array(length).fill(""));
    }
  }, [data, length, onReceive, setData]);
  return (
    <div ref={ref}>
      {data.map((itm: string, idx: number) => (
        <input
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          ref={ref}
          className={clsx("liter")}
          maxLength={1}
          value={itm}
          onChange={onChange(idx)}
        />
      ))}
    </div>
  );
}
