import React from "react";
import vehicleImg from "../../../assets/Fleet_EV.png";
import shuttleImg from "../../../assets/image-shuttle.png";
import shuttleLogo from "../../../assets/shuttle-space-solid.svg";
import {
  JourneyResultWrapper,
  JourneyResultContainer,
  JourneyResultImg,
} from "./styles/JourneyResult.styles";

const JourneyResult = ({ journeyResult }) => {
  return (
    <JourneyResultWrapper>
      <JourneyResultContainer>
        <div className="top-bar">
          <JourneyResultImg>
            <img className="ticket-logo" src={shuttleLogo} alt="ticket-logo" />
            <p>Interstellar Ticket</p>
          </JourneyResultImg>
          <div className="total-journey-cost">
            Total cost: £{journeyResult.journeyCost.toFixed(2)}
          </div>
        </div>
        <div
          className="main-content"
          style={{
            height: "70%",
            width: "100%",
            borderRadius: "0 0 15px 15px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px 0 20px",
          }}
        >
          <div>
            <p
              className="journey-ticket-text"
              style={{
                fontSize: "1.4rem",
                color: "grey",
                marginBottom: "10px",
              }}
            >
              Recommended Transport
            </p>
            <p
              className="journey-ticket-text"
              style={{ fontSize: "1.1rem", marginBottom: "10px" }}
            >
              Name: {journeyResult.recommendedTransport.name}
            </p>
            <p
              className="journey-ticket-text"
              style={{ fontSize: "1.1rem", marginBottom: "10px" }}
            >
              Capacity: {journeyResult.recommendedTransport.capacity}
            </p>
            <p
              className="journey-ticket-text"
              style={{ fontSize: "1.1rem", marginBottom: "10px" }}
            >
              Rate per AU:{" "}
              {journeyResult.recommendedTransport.ratePerAu.toFixed(2)}
            </p>
          </div>
          <div style={{ textAlign: "end", fontSize: "1.2rem" }}>
            <p className="total-parking">
              Parking fee: £{journeyResult.parkingFee.toFixed(2)}
            </p>
            {journeyResult.recommendedTransport.name.toLowerCase() ===
            "personal vehicle" ? (
              <img src={vehicleImg} alt="vehicle" style={{ width: "auto" }} />
            ) : (
              <img src={shuttleImg} alt="vehicle" style={{ width: "520px" }} />
            )}
          </div>
        </div>
      </JourneyResultContainer>
    </JourneyResultWrapper>
  );
};

export default JourneyResult;
