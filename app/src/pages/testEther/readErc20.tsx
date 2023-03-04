import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useContext,
} from "react";
import { ethers, Contract, providers } from "ethers";
import { Button, Divider } from "antd";
import { EthersContext } from "./EthersContext";

export default function erc20reading() {
  const { ethersProvider, ethersAccount, erc20, erc20Address } =
    useContext<any>(EthersContext);
  const [totalSupply, setTotalSupply] = useState<any>();
  const [myCount, setMyCount] = useState<string | undefined>();

  const [symbol, setSymbol] = useState<string>("");

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
    console.log("ethersAccount", ethersAccount);
    if (!ethersAccount) {
      return;
    }
    const fromMe = erc20.filters.Transfer(ethersAccount, null);
    erc20.on(fromMe, () => {
      getMyBalance();
    });
    const toMe = erc20.filters.Transfer(null, ethersAccount);
    erc20.on(toMe, () => {
      getMyBalance();
    });
    // eslint-disable-next-line consistent-return
    return () => {
      if (erc20?.removeAllListener) {
        erc20?.removeAllListener(fromMe);
        erc20?.removeAllListener(toMe);
      }
    };
  }, [getMyBalance, erc20, ethersAccount]);

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
