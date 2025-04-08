import { ethers } from "ethers";
import { useState } from "react";

const ConnectWallet = () => {
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("MetaMask is not installed!");
            return;
        }
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setWalletAddress(address);
            console.log("Connected Wallet:", address);
        } catch (error) {
            console.error("Wallet Connection Error:", error);
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {walletAddress && <p>Connected: {walletAddress}</p>}
        </div>
    );
};

export default ConnectWallet;