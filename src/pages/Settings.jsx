import React from "react";

const Settings = () => { return ( <div className="min-h-screen p-6 bg-white text-gray-800"> <h2 className="text-3xl font-semibold mb-4">Settings</h2>

<div className="bg-gray-50 rounded-lg p-6 shadow-md max-w-lg">
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Username</label>
      <input
        type="text"
        placeholder="Darshan Naik"
        className="w-full px-4 py-2 border rounded-lg"
        disabled
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Wallet Address</label>
      <input
        type="text"
        placeholder="0x123...abc"
        className="w-full px-4 py-2 border rounded-lg"
        disabled
      />
    </div>

    <button
      className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      onClick={() => alert("Logout or reset settings here")}
    >
      Logout
    </button>
  </div>
</div>

); };

export default Settings;