import React, { useState, useEffect } from "react";
import { getGates, getCheapRoutes } from "../../../server/server";

import {
  CheapTravelWrapper,
  CheapTravelBanner,
  CheapTravelContent,
  CheapTravelModal,
} from "./styles/CheapTravel.styles";

import { FormControl, FormLabel } from "@mui/joy";
import { MenuItem, Select } from "@mui/material";

import hero from "../../../assets/hero3.png";
import Button from "../../../components/Button/Button";
import Loading from "../../../components/Loading/Loading";
import NoData from "../../../components/NoData/NoData";
import CheapTravelModalComponent from "../CheapTravelModal/CheapTravelModal";

const CheapTravel = ({ handleFavouritesClick }) => {
  const [data, setData] = useState();
  const [cheapRoute, setCheapRoute] = useState();
  const [toValue, setToValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(cheapRoute);

  useEffect(() => {
    getGates(setData);
  }, []);

  const handleGetCode = (to, from) => {
    let toCode;
    let fromCode;

    data &&
      // eslint-disable-next-line array-callback-return
      data.filter((arr) => {
        if (arr.name === to) {
          toCode = arr.code;
        }
        if (arr.name === from) {
          fromCode = arr.code;
        }
      });

    if (isClicked) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    getCheapRoutes(toCode, fromCode, setCheapRoute);
  };

  return (
    <>
      <CheapTravelWrapper>
        <CheapTravelBanner>
          <img src={hero} alt="hero-banner" />
        </CheapTravelBanner>
        <CheapTravelContent>
          <div className="cheap-info">
            <h1>Cheap Interstellar Travel</h1>
          </div>
        </CheapTravelContent>
      </CheapTravelWrapper>
      <CheapTravelModal>
        <FormControl style={{ width: "100%" }}>
          <FormLabel sx={{ color: "lightslategrey" }}>Departure</FormLabel>
          <Select onChange={(e) => setToValue(e.target.value)}>
            {data &&
              data.map((gate) => {
                return (
                  <MenuItem key={gate.uuid} value={gate.name}>
                    {gate?.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <div style={{ display: "flex", alignItems: "center" }}>To</div>
        <FormControl style={{ width: "100%" }}>
          <FormLabel sx={{ color: "lightslategrey" }}>Arrival</FormLabel>
          <Select onChange={(e) => setFromValue(e.target.value)}>
            {data &&
              data.map((gate) => (
                <MenuItem key={gate.uuid} value={gate.name}>
                  {gate?.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button
          text="Search"
          clickFunc={() => {
            handleGetCode(toValue, fromValue);
            setIsClicked(true);
          }}
        ></Button>
      </CheapTravelModal>
      {cheapRoute?.length === 0 && loading && <Loading />}
      {cheapRoute ? (
        <CheapTravelModalComponent
          cheapRoute={cheapRoute}
          clickFunc={() => handleFavouritesClick(cheapRoute)}
        />
      ) : (
        <NoData />
      )}
    </>
  );
};

export default CheapTravel;
