import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [imgSrc, setImgSrc] = useState("");
  const HoverImg = (e) => {
    setImgSrc(e.target.src);
  };
  return (
    <div>
      {/* filter search */}
      <div className="filterBody">
        <div className="margAuto makeFlex">
          <div className="filterTextBox">
            <label className="filterLabel">Label1</label>
            <input className="filterInput" type="text" value="filterBody" />
          </div>
          <div className="filterTextBox">
            <label className="filterLabel">Label1</label>
            <input className="filterInput" type="text" value="filterBody" />
          </div>
          <div className="filterTextBox">
            <label className="filterLabel">Label1</label>
            <input className="filterInput" type="text" value="filterBody" />
          </div>
          <div className="filterTextBox">
            <label className="filterLabel">Label1</label>
            <input className="filterInput" type="text" value="filterBody" />
          </div>

          <input className= "buttonSearch" type="button" value="SEARCH"/>
        </div>
      </div>
      {/* card */}
      <div className="parentDiv">
        <div className="makeFlex">
          <div className="makeFlex flexOne contentDesc">
            <div>
              <img
                src={
                  imgSrc
                    ? imgSrc
                    : "http://r1imghtlak.mmtcdn.com/d94c1fa89cb211e9bbba0242ac110003.jpg?&output-quality=75&downsize=583:388&output-format=jpg"
                }
                height="162"
                width="243"
              />
              <div>
                <img
                  src="http://r1imghtlak.mmtcdn.com/d94c1fa89cb211e9bbba0242ac110003.jpg?&output-quality=75&downsize=583:388&output-format=jpg"
                  onMouseOver={HoverImg}
                  height="50"
                  width="56"
                />
                <img
                  src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20090106161513779-e9c823e852be11e898fb0ae1a3af2532.jpg?&output-quality=75&downsize=583:388&output-format=jpg"
                  className="picGap"
                  onMouseOver={HoverImg}
                  height="50"
                  width="56"
                />
                <img
                  src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20090106161513779-cf90a1d6536c11e88a2e0aa814dda0b8.jpg?&output-quality=75&downsize=583:388&output-format=jpg"
                  className="picGap"
                  onMouseOver={HoverImg}
                  height="50"
                  width="56"
                />
              </div>
            </div>
            <div className="margin20">
              <p className="titleClass makeFlex">
                Title
                <span className="star-rating">
                  <input type="radio" id="5-stars" name="rating" value="5" />
                  <label className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" value="4" />
                  <label className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" value="3" />
                  <label  className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" value="2" />
                  <label className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" value="1" />
                  <label className="star">
                    &#9733;
                  </label>
                </span>
              </p>
              <div className="detailsClass">Details</div>
            </div>
          </div>

          <div className="makeFlex columFlex borderLeft ">
            <div className="includeClass">
              included in this price
              <div>GST price</div>
            </div>
            <div className="priceContent ">
              <div className="saveINRTage">
                Save INR 1500 <span>Discount TAG</span>
              </div>
              <div className="totalPrice">INR 5999</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
