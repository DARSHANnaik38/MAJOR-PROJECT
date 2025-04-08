// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FileStorage {
    struct FileData {
        string fileName;
        string ipfsHash;
    }

    mapping(address => FileData[]) private userFiles;  

    event FileUploaded(address indexed user, string fileName, string ipfsHash);
    event FileDeleted(address indexed user, string fileName);

    // Store file name & IPFS hash
    function uploadFile(string memory _fileName, string memory _ipfsHash) public {
        userFiles[msg.sender].push(FileData(_fileName, _ipfsHash));
        emit FileUploaded(msg.sender, _fileName, _ipfsHash);
    }

    // Get all files uploaded by user
    function getUserFiles() public view returns (FileData[] memory) {
        return userFiles[msg.sender];
    }

    // Delete a file by index
    function deleteFile(uint index) public {
        require(index < userFiles[msg.sender].length, "Invalid index");

        // Move last element to the deleted position
        userFiles[msg.sender][index] = userFiles[msg.sender][userFiles[msg.sender].length - 1];
        userFiles[msg.sender].pop(); 

        emit FileDeleted(msg.sender, userFiles[msg.sender][index].fileName);
    }
}