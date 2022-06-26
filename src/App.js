import React, { useEffect } from "react";
// importing MyRouts where we located all of our theme
import MyRouts from "./routers/routes";
import { useMoralis } from "react-moralis";

function App() {
  const {
    Moralis,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    initialize,
    isInitialized,
    logout,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();

  useEffect(() => {
    Moralis.start({
      appId: "JwwfcOmnsit1U1EoQvmWvS92KSnnDPBy1XM8XQ2U",
      serverUrl: "https://iorlwrrg41kr.usemoralis.com:2053/server",
    });
    enableWeb3();

    console.log({ isInitialized, isWeb3Enabled });
  }, []);

  return (
    <div>
      <MyRouts />
    </div>
  );
}

export default App;
