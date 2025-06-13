import React from "react";
import { useState } from "react";

export default function EcoChainApp() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setWalletConnected(true);
      } catch (err) {
        console.error("Wallet connection error:", err);
      }
    } else {
      alert("Please install MetaMask to use EcoChain.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f0fdf4", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <div style={{ maxWidth: "400px", width: "100%", background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#166534", textAlign: "center", marginBottom: "1rem" }}>
          EcoChain
        </h1>
        <p style={{ textAlign: "center", color: "#374151", marginBottom: "1.5rem" }}>
          Commit to a greener future. Connect your wallet and sign the pledge to support sustainability on the blockchain.
        </p>
        {walletConnected ? (
          <div style={{ textAlign: "center", color: "#15803d", fontWeight: "500" }}>
            ✅ Wallet Connected: {account}
          </div>
        ) : (
          <button onClick={connectWallet} style={{ width: "100%", backgroundColor: "#16a34a", color: "white", padding: "0.75rem", borderRadius: "0.5rem", border: "none", fontSize: "1rem", cursor: "pointer" }}>
            Connect Wallet
          </button>
        )}
      </div>
    </main>
  );
}
