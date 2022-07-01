import React, { useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ExploreOne from "../themes/explore-one";
import ExploreTwo from "../themes/explore-two";
import ExploreThree from "../themes/explore-three";
import ExploreFour from "../themes/explore-four";
import Auctions from "../themes/auctions";
import ItemDetails from "../themes/item-details";
import Activity from "../themes/activity";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import HelpCenter from "../themes/help-center";
import Authors from "../themes/authors";
import Author from "../themes/author";
import WalletConnect from "../themes/wallet-connect";
import Create from "../themes/create";
import Login from "../themes/login";
import Signup from "../themes/signup";
import Contact from "../themes/contact";

const MyRouts = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<ThemeOne />} />
          <Route exact path="/explore-1" element={<ExploreOne />} />
          <Route exact path="/explore-2" element={<ExploreTwo />} />
          <Route exact path="/explore-3" element={<ExploreThree />} />
          <Route exact path="/explore-4" element={<ExploreFour />} />
          <Route exact path="/auctions" element={<Auctions />} />
          <Route exact path="/item-details" element={<ItemDetails />} />
          <Route exact path="/activity" element={<Activity />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-single" element={<BlogSingle />} />
          <Route exact path="/help-center" element={<HelpCenter />} />
          <Route exact path="/authors" element={<Authors />} />
          <Route exact path="/author" element={<Author />} />
          <Route exact path="/wallet-connect" element={<WalletConnect />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default MyRouts;
