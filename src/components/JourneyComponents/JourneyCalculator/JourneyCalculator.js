import React from "react";
import { calculateJourneyCost } from "../../../server/server";
import {
  JourneyCalculator,
  JourneyCalculatorRow,
} from "./styles/JourneyCalculator.styles";
import JourneyInput from "../JourneyInput/JourneyInput";
import Button from "../../Button/Button";

const JourneyCalculatorComponent = ({
  journeyData,
  setjourneyData,
  setJourneyResult,
}) => {
  return (
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
            clickFunc={
              (() =>
                calculateJourneyCost(
                  journeyData["distance"],
                  journeyData["passagersNo"],
                  journeyData["parkingDays"]
                ),
              setJourneyResult())
            }
          />
        </JourneyCalculatorRow>
      </form>
    </JourneyCalculator>
  );
};

export default JourneyCalculatorComponent;
