import React, { useEffect } from "react";
// importing MyRouts where we located all of our theme
import MyRouts from "./routers/routes";
import { useMoralis } from "react-moralis";
import { useIpfs } from "./hooks/useIpfs";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connect } from "./redux/blockchain/blockchainActions";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const { Moralis, enableWeb3 } = useMoralis();
  const { ipfs } = useIpfs();

  useEffect(() => {
    dispatch(connect());

    Moralis.start({
      appId: "JwwfcOmnsit1U1EoQvmWvS92KSnnDPBy1XM8XQ2U",
      serverUrl: "https://iorlwrrg41kr.usemoralis.com:2053/server",
    });
    enableWeb3();

    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, []);

  return (
    <div>
      {!ipfs && (
        <p>Oh oh, not connected to IPFS. Checkout out the logs for errors</p>
      )}
      {/* {JSON.stringify(blockchain)} */}
      <MyRouts />
    </div>
  );
}

export default App;
