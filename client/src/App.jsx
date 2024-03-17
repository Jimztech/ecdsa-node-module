import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("0x1c6d0e");
  const [privateKey, setPrivateKey] = useState("d3a0c49a7126a06590123cef25376935365a8e4a6c807fb887603cb6ee3b1e1e")

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
