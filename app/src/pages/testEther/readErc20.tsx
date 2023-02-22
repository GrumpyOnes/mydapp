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
export default function erc20reading() {
  const { ethersProvider, ethersAccount } = useContext<any>(EthersContext);
  const [totalSupply, setTotalSupply] = useState<any>();
  const [myCount, setMyCount] = useState<string | undefined>();

  const [symbol, setSymbol] = useState<string>("");
  const erc20: Contract = useMemo(
    () => new ethers.Contract(erc20Address, ERC20ABI, ethersProvider),
    [ethersProvider]
  );
  const getMyBalance = useCallback(() => {
    erc20.balanceOf(ethersAccount).then((data: any) => {
      setMyCount(ethers.utils.formatEther(data));
    });
  }, [erc20, setMyCount, ethersAccount]);
  useEffect(() => {
    ethersProvider.getCode(erc20Address).then((code: string) => {
      if (code === "0x") return;
      erc20.symbol().then((data: string) => {
        setSymbol(data);
      });
      erc20.totalSupply().then((data: any) => {
        setTotalSupply(ethers.utils.formatEther(data));
      });
    });
  }, [erc20]);
  useEffect(() => {
    getMyBalance();
  }, [getMyBalance]);

  return (
    <div>
      <Divider dashed orientation="left">
        <span style={{ color: "#6696c8" }}>ERC20 Reading...</span>
      </Divider>
      <p>
        <b>ERC20 Contract:</b>
        {erc20Address}
      </p>
      <p>
        <b>MyToken totalSupply:</b>
        {totalSupply} {symbol}
      </p>
      {ethersAccount && (
        <p>
          <b>MyToken in current account:</b>
          {myCount} {symbol}
        </p>
      )}
    </div>
  );
}
