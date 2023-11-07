import React, { useState } from "react";
import { calculateJourneyCost } from "../../server/server";

import hero from "../../assets/hero3.png";

import {
  HomeBanner,
  HomeWrapper,
  HomeContent,
  JourneyCalculator,
  JourneyCalculatorRow,
} from "./styles/Home.styles";

import Button from "../../components/Button/Button";
import JourneyInput from "../../components/JourneyComponents/JourneyInput/JourneyInput";
import Services from "../../components/Services/Service";
import Gates from "../../components/GatesComponents/Gates/Gates";
import JourneyResult from "../../components/JourneyComponents/JourneyResult/JourneyResult";

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
      {journeyResult && <JourneyResult journeyResult={journeyResult} />}
      <Services />
      <Gates />
    </div>
  );
};

export default Home;
