// src/utils/ethersConfig.js
export async function uploadFileToBlockchain(fileName, ipfsUrl) {
    // placeholder function
    console.log("Uploading", fileName, ipfsUrl);
    return true;
  }
  
  export async function fetchUserFiles() {
    // returns dummy files for now
    return [
      { fileName: "demo.txt", ipfsHash: "Qm123456" },
      { fileName: "test.pdf", ipfsHash: "Qmabcdef" },
    ];
  }
  
  export async function deleteFileFromBlockchain(index) {
    // simulate deletion
    console.log("Deleting file at index", index);
    return true;
  }
  