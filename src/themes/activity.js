import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Activities from "../components/Activity/Activity";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import { useMoralis } from "react-moralis";

const Activity = () => {
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
    console.log({ isInitialized, isWeb3Enabled });
  }, []);

  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Activity" subpage="Pages" page="Activity" />
      <Activities />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Activity;
