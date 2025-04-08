import React from "react";

const Home = () => { return ( <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 to-blue-100"> <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Secure File Storage</h1> <p className="text-lg text-gray-600 mb-8 text-center max-w-xl"> Store and manage your files securely using blockchain and IPFS. Enjoy tamper-proof and decentralized file storage. </p> <img
src="/assets/secure-file-illustration.png"
alt="Secure File Storage"
className="w-96 rounded-xl shadow-xl"
/> </div> ); };

export default Home;