import React from "react";
import { useNavigate } from "react-router-dom";
import { gateSectionData } from "../../../data/data";
import { GatesWrapper, GatesContentWrapper } from "./styles/Gates.styles";

const Gates = () => {
  const navigate = useNavigate();
  return (
    <GatesWrapper id="gates">
      <div className="info">
        <h2>
          Popular <span>Gates</span> to begin touring the cosmos
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          className="gate-btn"
          onClick={() => navigate("/starseeker/gates/")}
        >
          View all gates
        </div>
      </div>
      <div className="gates">
        {gateSectionData.map((gate) => {
          return (
            <div key={gate.uuid} className="gate-card">
              <img src={gate.image} alt="gate-logo" />
              <div className="gate-card-content">
                <h3>{gate.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </GatesWrapper>
  );
};

export default Gates;
