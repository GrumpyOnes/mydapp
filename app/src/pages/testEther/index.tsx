import React, { useState } from "react";
import useEthersProvider from "./useEthersProvider";
import LinkMetamask from "./linkMetamask";
import ERC20Reading from "./readErc20";
import ERC20Transfer from "./transferErc20";
import useErc20 from "./useErc20";
import { EthersContext } from "./EthersContext";

export default function index() {
  const { ethersProvider } = useEthersProvider();
  const { erc20, erc20Signed, erc20Address } = useErc20(ethersProvider);
  const [ethersAccount, setEthersAccount] = useState<string>("");

  return (
    <EthersContext.Provider
      value={{
        ethersProvider,
        setEthersAccount,
        ethersAccount,
        erc20,
        erc20Signed,
        erc20Address,
      }}
    >
      <LinkMetamask />
      <ERC20Reading />
      <ERC20Transfer />
    </EthersContext.Provider>
  );
}
