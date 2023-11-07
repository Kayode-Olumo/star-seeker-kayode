import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";
import { JourneyCalculatorRow } from "./styles/JourneyInput.styles";

const JourneyInput = ({ labelText, getResults }) => {
  return (
    <JourneyCalculatorRow className="journey-calculator-row">
      <FormControl>
        <FormLabel className="journey-label">{labelText}</FormLabel>
        <Input
          className="journey-input"
          type="number"
          defaultValue={0}
          variant="outlined"
          onChange={getResults}
        />
      </FormControl>
    </JourneyCalculatorRow>
  );
};

export default JourneyInput;
