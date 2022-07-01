import React, { useState, useEffect, useRef } from "react";
import { useMoralis, useMoralisWeb3Api, useNFTBalances } from "react-moralis";

const initData = {
  pre_heading: "Exclusive Assets",
  heading: "Explore",
  btn_1: "View All",
  btn_2: "Load More",
};

const sliceOver = (str, numOfLengthToShow) => {
  return str.slice(0, numOfLengthToShow) + "...";
};

const ExploreOne = () => {
  const { isWeb3Enabled } = useMoralis();
  const [initData, setInitData] = useState([]);
  const [NFTs, setNFTs] = useState([]);

  const Web3Api = useMoralisWeb3Api();
  const fetchNFTsForContract = async () => {
    const options = {
      chain: "polygon",
      address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
      token_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
    };

    const events = await Web3Api.account.getNFTsForContract(options);
    setNFTs(events.result);
  };

  const setAccount = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (!isWeb3Enabled) return;
    fetchNFTsForContract();
  }, [isWeb3Enabled]);
  const defaultImg =
    "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";

  return (
    <section className="explore-area load-more p-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>{initData.pre_heading}</span>
                <h3 className="mt-3 mb-0">{initData.heading}</h3>
              </div>
              <div className="intro-btn">
                <a className="btn content-btn" href="/explore-3">
                  {initData.btn_1}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row items">
          {NFTs?.map((item, idx) => {
            const meta = JSON.parse(item.metadata);

            return (
              <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="image-over">
                    <a href="/item-details">
                      <img
                        className="card-img-top"
                        src={meta.image ? meta.image : defaultImg}
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body">
                      <a href="/item-details">
                        <h5 className="mb-0">{meta.name}</h5>
                      </a>
                      <div className="seller d-flex align-items-center my-3">
                        <span>Owned By</span>
                        <a href="/author">
                          <h6 className="ml-2 mb-0">
                            {sliceOver(item.owner_of, 6)}
                          </h6>
                        </a>
                      </div>
                      <div className="card-bottom d-flex justify-content-between"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {/* <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">
              {initData.btn_2}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOne;
