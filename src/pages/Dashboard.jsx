import React from "react"; import { Globe, Upload, Lock, Settings, FilePlus } from "lucide-react"; 
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
export default function Dashboard() { return ( <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-4"> {/* Top Header */} <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow"> <div className="text-2xl font-bold">Secure File Storage</div> <div className="flex space-x-6 text-lg"> <a href="/" className="hover:text-indigo-600">Home</a> <a href="/upload" className="hover:text-indigo-600">Upload</a> <a href="/storage" className="hover:text-indigo-600">Storage</a> <a href="/settings" className="hover:text-indigo-600">Settings</a> </div> </div>

{/* Main Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {/* Sidebar */}
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <Button variant="outline" className="w-full flex items-center justify-start space-x-2">
        <Globe /> <span>Home</span>
      </Button>
      <Button variant="outline" className="w-full flex items-center justify-start space-x-2">
        <Upload /> <span>Upload File</span>
      </Button>
      <Button variant="outline" className="w-full flex items-center justify-start space-x-2">
        <Settings /> <span>Settings</span>
      </Button>
    </div>

    {/* Upload Panel */}
    <div className="col-span-2 bg-white rounded-2xl p-10 shadow text-center">
      <div className="text-4xl mb-6">Upload File</div>
      <div className="border-2 border-dashed border-indigo-400 p-10 rounded-xl">
        <FilePlus className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
        <p className="text-lg mb-4">Drag and drop your file here or</p>
        <Button className="bg-indigo-600 text-white">Connect File</Button>
      </div>
    </div>
  </div>

  {/* Bottom Card Options */}
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
    <Card className="bg-white p-4">
      <CardContent className="flex flex-col items-center">
        <Globe className="mb-2" />
        <p className="text-center text-sm">Change Encryption Vault</p>
      </CardContent>
    </Card>
    <Card className="bg-white p-4">
      <CardContent className="flex flex-col items-center">
        <Lock className="mb-2" />
        <p className="text-center text-sm">Change Encryption Preferences</p>
      </CardContent>
    </Card>
    <Card className="bg-white p-4">
      <CardContent className="flex flex-col items-center">
        <Lock className="mb-2" />
        <p className="text-center text-sm">Change Encrypt & Categories</p>
      </CardContent>
    </Card>
    <Card className="bg-white p-4">
      <CardContent className="flex flex-col items-center">
        <Lock className="mb-2" />
        <p className="text-center text-sm">Change Access</p>
      </CardContent>
    </Card>
    <Card className="bg-white p-4">
      <CardContent className="flex flex-col items-center">
        <Settings className="mb-2" />
        <p className="text-center text-sm">Manage Access / Revoke</p>
      </CardContent>
    </Card>
  </div>
</div>

); }