import React from "react";
import "./Morph.css";
import i1 from "../../images/input/i1.png";
import i2 from "../../images/input/i2.png";
import o1 from "../../images/output/o1.png";
import o2 from "../../images/output/o2.png";
import o3 from "../../images/output/o3.png";

const inputImages = [i1, i2];

const outputImages = [o1, o2, o3];

const Morph = () => {
  return (
    <div className="morph">
      <div className="morph__input__box">
        {inputImages.map((image) => {
          return (
            <div
              className="morph__input"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
      <div className="morph__lines">
        <div class="vl"></div>
        <div class="v2"></div>
      </div>
      <div className="morph__output__box">
        {outputImages.map((image) => {
          return (
            <div
              className="morph__output"
              style={{ backgroundImage: `url(${image})` }}
            >
                
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Morph;
