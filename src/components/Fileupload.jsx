import { useState } from "react";
import { getContract } from "../utils/blockchain";
import { uploadToIPFS } from "../utils/ipfs";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {
        if (!file) return alert("Please select a file");
        setMessage("Uploading to IPFS...");
        const ipfsUrl = await uploadToIPFS(file);
        if (!ipfsUrl) return setMessage("IPFS upload failed");

        setMessage("Saving to blockchain...");
        try {
            const contract = await getContract();
            const tx = await contract.storeFile(ipfsUrl);
            await tx.wait();
            setMessage("File successfully stored on blockchain!");
        } catch (error) {
            console.error(error);
            setMessage("Blockchain transaction failed");
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;