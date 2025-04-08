import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

// Replace these with your actual Infura Project credentials
const projectId = "your_project_id";
const projectSecret = "your_project_secret";

// Auth string
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

// Create authenticated IPFS client
const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

// Function to upload file to IPFS
export const uploadToIPFS = async (file) => {
  try {
    const added = await ipfs.add(file);
    return `https://ipfs.io/ipfs/${added.path}`; // OR use Infura gateway
  } catch (error) {
    console.error("IPFS Upload Error:", error.message || error);
    return null;
  }
};

// Handle file input and trigger upload
export const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    // Read the file as a Buffer
    const reader = new FileReader();
    reader.onloadend = async () => {
      const buffer = Buffer.from(reader.result);
      const ipfsURL = await uploadToIPFS(buffer);
      console.log("Uploaded IPFS URL:", ipfsURL);
      // You can display it or use it however you want
    };
    reader.readAsArrayBuffer(file);
  } catch (err) {
    console.error("File handling error:", err);
  }
};
