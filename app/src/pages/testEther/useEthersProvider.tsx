import React, { useMemo } from "react";
import { ethers } from "ethers";

declare let window: any;
const getEthersProvider = () => {
  const _ethersProvider: any = useMemo(() => {
    let _provider: any;
    if (window?.ethereum === null) {
      console.log("metamask not install,using read-only default");
    } else {
      _provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    console.log("_provider", _provider);
    return _provider;
  }, []);
  return { ethersProvider: _ethersProvider };
};

export default getEthersProvider;
