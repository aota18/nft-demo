import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMoralis } from "react-moralis";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json-1/authors";

const AuthorProfile = () => {
  const { Moralis, isWeb3Enabled } = useMoralis();

  const [data, setData] = useState({});
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    if (!isWeb3Enabled) return;
    const currentUser = Moralis.User.current();

    if (currentUser) {
      console.log(currentUser.attributes);
      setAuthorData([
        {
          id: currentUser.id,
          img: "/img/author_1.jpg",
          avatar: "/img/avatar_1.jpg",
          author: currentUser.id,
        },
      ]);
    } else {
      console.log("user doesnt exist");
    }
  }, [isWeb3Enabled]);

  return (
    <section className="popular-collections-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <h3 className="mt-3 mb-0">User Profile</h3>
            </div>
          </div>
        </div>
        <div className="row items">
          {authorData?.map((item, idx) => {
            return (
              <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                <div className="card no-hover text-center">
                  <div className="image-over">
                    <a href="/author">
                      <img className="card-img-top" src={item.img} alt="" />
                    </a>
                    {/* Seller */}
                    <a className="seller" href="/author">
                      <div className="seller-thumb avatar-lg">
                        <img
                          className="rounded-circle"
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body mt-4">
                      <a href="/author">
                        <h5>{item.author}</h5>
                      </a>
                      <a>Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthorProfile;
