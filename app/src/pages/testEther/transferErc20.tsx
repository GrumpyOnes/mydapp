import React, { useCallback, useContext } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Divider } from "antd";
import {
  TransactionReceipt,
  TransactionResponse,
} from "@ethersproject/abstract-provider";
import { parseEther } from "ethers/lib/utils";
import { EthersContext } from "./index";

const App: React.FC = () => {
  const { erc20Signed, ethersProvider } = useContext<any>(EthersContext);
  const submitTransfer = useCallback(
    async (values: any) => {
      console.log("Success:", values);
      const { address, count } = values;

      const trans: TransactionResponse = erc20Signed?.transfer(
        address,
        // eslint-disable-next-line prefer-template
        parseEther(count + "")
      );
      const reception: TransactionReceipt = await trans?.wait();
      console.log("reception", reception);
    },
    [erc20Signed]
  );
  return (
    <>
      <Divider dashed orientation="left">
        <span style={{ color: "#6696c8" }}>ERC20 Transfer...</span>
      </Divider>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={submitTransfer}
        autoComplete="off"
      >
        <Form.Item
          label="ADDRESS"
          name="address"
          rules={[{ required: true, message: "Please input address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="COUNT"
          name="count"
          rules={[{ required: true, message: "Please input your count!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
