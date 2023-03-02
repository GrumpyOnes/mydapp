import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useState,
  Fragment,
} from "react";
import Prism from "prismjs";
import { useParams } from "react-router-dom";
import { Input, Button, Form, Divider } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "prismjs/themes/prism.css";
import { algos, names } from "./getAlgors";
import "./style.less";

export default function minInteger() {
  const { name } = useParams<any>();

  const currentAlgos = useMemo(() => algos[name.toLowerCase()], [name]);

  const ref = useRef<any>("");
  useEffect(() => {
    if (ref && ref.current) {
      Array.from(ref.current.getElementsByClassName("prism-code-fix")).forEach(
        (item: any) => {
          Prism.highlightElement(item);
        }
      );
    }
  }, [ref.current, name]);
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    const count = currentAlgos.funcs.length;
    setResults(new Array(count).fill(""));
  }, [currentAlgos.funcs]);
  const inputChange = useCallback(
    (idx: number) => (values: any) => {
      console.log(values.myarguments);
      const data = `[${values.myarguments}]`;

      try {
        // eslint-disable-next-line no-eval
        const _dt = eval(data);
        console.log(_dt);
        const _result = currentAlgos.funcs[idx].func(..._dt);
        results[idx] = _result.toString();
        setResults([...results]);
      } catch (err) {
        console.error(err);
      }
    },
    [currentAlgos]
  );
  return (
    <div ref={ref}>
      {currentAlgos.funcs.map((itm: any, idx: number) => (
        <Fragment key={itm.name}>
          <Divider orientation="left">{itm.name}</Divider>
          <p className="desc">{itm.desc}</p>
          <Form
            name="customized_form_controls"
            layout="inline"
            onFinish={inputChange(idx)}
            initialValues={{
              myarguments: "",
            }}
          >
            <Form.Item name="myarguments" label="测试">
              <Input placeholder="输入参数，逗号分割" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {results[idx] && (
            <div className="rsultWrap">
              <ExclamationCircleOutlined />
              &nbsp;&nbsp;结果为 {results[idx]}
            </div>
          )}
          <div className="code">
            <pre>
              <code className="prism-code-fix prism-code language-javascript">
                const func = {itm.func.toString()}
              </code>
            </pre>
          </div>
          <br />
          <br />
        </Fragment>
      ))}
    </div>
  );
}
