import { ethers } from "ethers"; import contractABI from "../contracts/FileStorage.json";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export const getContract = async () => { if (!window.ethereum) throw new Error("No crypto wallet found");

const provider = new ethers.BrowserProvider(window.ethereum); await provider.send("eth_requestAccounts", []); const signer = await provider.getSigner();

return new ethers.Contract(contractAddress, contractABI.abi, signer); };