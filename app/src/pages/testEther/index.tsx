import React, { createContext, useState } from "react";
import useEthersProvider from "./useEthersProvider";
import LinkMetamask from "./linkMetamask";
import ERC20Reading from "./readErc20";

export const EthersContext = createContext({});
export default function index() {
  const { ethersProvider } = useEthersProvider();
  const [ethersAccount, setEthersAccount] = useState<string>("");
  return (
    <EthersContext.Provider
      value={{ ethersProvider, setEthersAccount, ethersAccount }}
    >
      <LinkMetamask />
      <ERC20Reading />
    </EthersContext.Provider>
  );
}
