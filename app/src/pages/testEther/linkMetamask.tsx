import React, { useCallback, useEffect, useState, useContext } from "react";
import { ethers } from "ethers";
import { Button, Divider } from "antd";
import { EthersContext } from "./EthersContext";

export default function linkMetamask() {
  const { ethersProvider, setEthersAccount, ethersAccount } =
    useContext<any>(EthersContext);

  const [ethersChainMsg, setEthersChainMsg] = useState<any>();
  const linkTo = useCallback(async () => {
    const accounts = await ethersProvider
      .send("eth_requestAccounts")
      .catch((err: any) => {
        console.log(err);
      });
    if (accounts.length > 0) {
      setEthersAccount(accounts[0]);
    }
  }, [ethersProvider, setEthersAccount]);
  const [ethersBalance, setEthersBalance] = useState<any>();
  useEffect(() => {
    if (!ethersAccount || !ethers.utils.isAddress(ethersAccount)) {
      return;
    }

    ethersProvider.getBalance(ethersAccount).then((data: any) => {
      setEthersBalance(ethers.utils.formatEther(data));
    });
    ethersProvider.getNetwork().then((data: any) => {
      console.log("********** chain msg", data);
      setEthersChainMsg(data);
    });
  }, [ethersAccount, ethersProvider]);

  return (
    <div>
      <Button onClick={linkTo}>{ethersAccount || "Link to Metamask"}</Button>
      {ethersBalance && <p>当前账户余额：{ethersBalance}</p>}
      {ethersChainMsg && <p>Chain info: chainId-{ethersChainMsg.chainId}</p>}
    </div>
  );
}
