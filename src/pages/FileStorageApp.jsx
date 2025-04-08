import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function FileStorageApp() { const [currentPage, setCurrentPage] = useState('home'); const [walletAddress, setWalletAddress] = useState('');

const connectWallet = async () => { if (!window.ethereum) return alert("Install MetaMask"); const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); setWalletAddress(accounts[0]); };

const renderHome = () => ( <div className="p-4"> <h1 className="text-3xl font-bold mb-4">Home</h1> <Button onClick={connectWallet}>Connect Wallet</Button> {walletAddress && <p className="mt-2">Connected: {walletAddress}</p>} </div> );

const renderDashboard = () => ( <div className="p-4"> <h1 className="text-3xl font-bold mb-4">Dashboard</h1> <input type="file" className="mb-2" /> <div className="space-x-2"> <Button>Upload File</Button> <Button variant="outline">Encrypt & Upload</Button> <Button variant="destructive">Cancel Upload</Button> </div> <div className="mt-6"> <h2 className="text-xl font-semibold mb-2">My Files</h2> <div className="grid gap-4"> <div className="border p-2 rounded-xl shadow"> <p>File1.pdf</p> <div className="space-x-2 mt-2"> <Button size="sm">Download</Button> <Button size="sm" variant="outline">Share</Button> <Button size="sm" variant="secondary">Grant Access</Button> <Button size="sm" variant="destructive">Revoke Access</Button> </div> </div> </div> </div> </div> );

const renderSettings = () => ( <div className="p-4"> <h1 className="text-3xl font-bold mb-4">Settings</h1> <Button className="mb-2">Change Encryption Preferences</Button><br /> <Button>Manage Wallet & Permissions</Button> </div> );

return ( <div className="min-h-screen bg-gray-50"> <nav className="flex gap-4 p-4 bg-white shadow-md"> <Button onClick={() => setCurrentPage('home')} variant={currentPage === 'home' ? 'default' : 'ghost'}>Home</Button> <Button onClick={() => setCurrentPage('dashboard')} variant={currentPage === 'dashboard' ? 'default' : 'ghost'}>Dashboard</Button> <Button onClick={() => setCurrentPage('settings')} variant={currentPage === 'settings' ? 'default' : 'ghost'}>Settings</Button> </nav>

{currentPage === 'home' && renderHome()}
  {currentPage === 'dashboard' && renderDashboard()}
  {currentPage === 'settings' && renderSettings()}
</div>

); }