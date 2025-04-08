import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uploadToIPFS } from "./utils/ipfs.js";
import {
  uploadFileToBlockchain,
  fetchUserFiles,
  deleteFileFromBlockchain,
} from "./utils/ethersConfig.js";
import Navbar from "./components/Navbar.jsx";  // Corrected import
import Home from "./pages/Home.jsx";  // Corrected import
import Dashboard from "./pages/Dashboard.jsx";  // Corrected import
import Settings from "./pages/Settings.jsx";  // Corrected import

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [txStatus, setTxStatus] = useState("");
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    loadUserFiles();
  }, []);

  const loadUserFiles = async () => {
    const files = await fetchUserFiles();
    setUserFiles(files);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setTxStatus("Uploading to IPFS...");
    const url = await uploadToIPFS(file);

    if (url) {
      setTxStatus("Storing in blockchain...");
      const success = await uploadFileToBlockchain(fileName, url);
      if (success) {
        setTxStatus("✅ File stored on blockchain!");
        loadUserFiles();
      } else {
        setTxStatus("❌ Failed to store.");
      }
    } else {
      setTxStatus("❌ IPFS upload failed.");
    }
  };

  const handleDelete = async (index) => {
    setTxStatus("Deleting file...");
    const success = await deleteFileFromBlockchain(index);
    if (success) {
      setTxStatus("✅ File deleted.");
      loadUserFiles();
    } else {
      setTxStatus("❌ Failed to delete.");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        {/* File upload component */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4 text-indigo-700">
            Secure File Storage
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <input
              type="file"
              className="block w-full md:w-auto border border-gray-300 rounded px-3 py-2"
              onChange={handleFileChange}
            />
            <button
              onClick={handleUpload}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Upload & Store
            </button>
          </div>

          {txStatus && (
            <p className="text-center text-sm text-gray-600 mb-4">{txStatus}</p>
          )}

          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            My Uploaded Files
          </h2>
          <ul className="divide-y divide-gray-200">
            {userFiles.map((file, index) => (
              <li key={index} className="py-2 flex items-center justify-between">
                <div>
                  <span className="font-medium">{file.fileName}</span>
                  <a
                    href={`https://ipfs.io/ipfs/${file.ipfsHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 underline ml-2"
                  >
                    View
                  </a>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
