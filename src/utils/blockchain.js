import { ethers } from "ethers";
import contractABI from "../artifacts/contracts/FileStorage.sol/FileStorage.json"; // Adjust path
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";  

export const getContract = async () => {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI.abi, signer);
};