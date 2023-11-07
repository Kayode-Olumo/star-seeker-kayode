import React, { useState } from "react";
import {
  //   getCheapRoutes,
  calculateJourneyCost,
} from "../../server/server";

import hero from "../../assets/hero3.png";
import vehicleImg from "../../assets/Fleet_EV.png";
import shuttleImg from "../../assets/image-shuttle.png";
import shuttleLogo from "../../assets/shuttle-space-solid.svg";

import {
  HomeBanner,
  HomeWrapper,
  HomeContent,
  JourneyCalculator,
  JourneyCalculatorRow,
  JourneyResult,
} from "./styles/Home.styles";

import Button from "../../components/Button/Button";
import JourneyInput from "../../components/JourneyComponents/JourneyInput/JourneyInput";
import Services from "../../components/Services/Service";
import Gates from "../../components/GatesComponents/Gates/Gates";

const Home = () => {
  const [journeyData, setjourneyData] = useState({
    distance: "",
    passagersNo: "",
    parkingDays: "",
  });
  const [journeyResult, setJourneyResult] = useState();

  //   const [favorites, setFavorites] = useState();
  //   const [loading, setLoading] = useState();
  //   const [error, setError] = useState();

  return (
    <div>
      <HomeWrapper>
        <HomeBanner>
          <img src={hero} alt="hero-banner" />
        </HomeBanner>
        <HomeContent className="background">
          <div className="home-info">
            <h1>Redefining the future</h1>
            <h1> of travel, one hyperspace jump at a time.</h1>
          </div>
          <JourneyCalculator>
            <form>
              <JourneyInput
                labelText={"Distance (in AUs)"}
                getResults={(e) =>
                  setjourneyData({ ...journeyData, distance: e.target.value })
                }
              />
              <JourneyInput
                labelText={"No. of Passagers"}
                getResults={(e) =>
                  setjourneyData({
                    ...journeyData,
                    passagersNo: e.target.value,
                  })
                }
              />
              <JourneyInput
                labelText={" No. of days for parking"}
                getResults={(e) =>
                  setjourneyData({
                    ...journeyData,
                    parkingDays: e.target.value,
                  })
                }
              />
              <JourneyCalculatorRow className="journey-calculator-row">
                <Button
                  text={"See cost"}
                  clickFunc={() => {
                    calculateJourneyCost(
                      journeyData["distance"],
                      journeyData["passagersNo"],
                      journeyData["parkingDays"],
                      setJourneyResult
                    );
                  }}
                />
              </JourneyCalculatorRow>
            </form>
          </JourneyCalculator>
        </HomeContent>
      </HomeWrapper>

      {journeyResult && (
        <JourneyResult>
          <div style={{ height: "100%", width: "100%" }}>
            <div
              className="top-bar"
              style={{
                padding: "10px 20px 0 20px",
                backgroundColor: "var(--primary-color)",
                height: "30%",
                width: "100%",
                borderRadius: "15px 15px 0 0 ",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  className="ticket-logo"
                  src={shuttleLogo}
                  alt="ticket-logo"
                  style={{
                    width: "40px",
                    marginRight: "20px",
                    fontSize: "1rem",
                    fill: "#fff",
                  }}
                />
                <p
                  style={{
                    fontSize: "2rem",
                    display: "grid",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Interstellar Ticket
                </p>
              </div>
              <div
                className="total-journey-cost"
                style={{
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                }}
              >
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
                  <img
                    src={vehicleImg}
                    alt="vehicle"
                    style={{ width: "auto" }}
                  />
                ) : (
                  <img
                    src={shuttleImg}
                    alt="vehicle"
                    style={{ width: "520px" }}
                  />
                )}
              </div>
            </div>
          </div>
        </JourneyResult>
      )}
      <Services />
      <Gates />
    </div>
  );
};

export default Home;
