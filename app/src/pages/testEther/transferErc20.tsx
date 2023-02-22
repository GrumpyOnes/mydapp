import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useContext,
} from "react";
import { ethers, Contract, providers } from "ethers";
import { Button, Divider } from "antd";
import { EthersContext } from "./index";
import ERC20ABI from "./abi/erc20";

export const erc20Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export default function erc20transfer() {
  const { ethersProvider, ethersAccount } = useContext<any>(EthersContext);

  return (
    <div>
      <Divider dashed orientation="left">
        <span style={{ color: "#6696c8" }}>ERC20 Transfer...</span>
      </Divider>
      <div>123</div>
    </div>
  );
}
