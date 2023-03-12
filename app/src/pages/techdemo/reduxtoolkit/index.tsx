import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";
import {
  increment,
  decrement,
  asyncIncrement,
} from "@/store/features/counterSlice";
import { getMovieData } from "@/store/features/movieSlice";

export default function index() {
  const { value } = useSelector((store: any) => store.counter);
  const { totals, list } = useSelector((store: any) => store.movie);
  const dispatch = useDispatch();

  const [mynumber, setMynumber] = useState(0);
  return (
    <div>
      {value}
      <Input
        value={mynumber}
        style={{ width: "10em" }}
        onChange={(e) => {
          setMynumber(parseInt(e.target.value, 10));
        }}
      />
      <Button onClick={() => dispatch(increment({ value: mynumber }))}>
        加
      </Button>
      <Button
        onClick={() => dispatch(asyncIncrement({ value: mynumber }) as any)}
      >
        异步加
      </Button>
      <Button onClick={() => dispatch(decrement())}>减</Button>
      <Button onClick={() => dispatch(getMovieData())}>获得电影1</Button>
    </div>
  );
}
