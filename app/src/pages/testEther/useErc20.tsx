import React, { useMemo } from "react";
import { ethers, Contract } from "ethers";
import ERC20ABI from "./abi/erc20";

export const erc20Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default (ethersProvider: any) => {
  const erc20: Contract = useMemo(
    () => new ethers.Contract(erc20Address, ERC20ABI, ethersProvider),
    [ethersProvider]
  );
  const erc20Signed: Contract = useMemo(() => {
    const _signer = ethersProvider.getSigner();
    return new ethers.Contract(erc20Address, ERC20ABI, _signer);
  }, [ethersProvider]);
  return { erc20, erc20Signed, erc20Address };
};
