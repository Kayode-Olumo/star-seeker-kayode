import React, { useState, useEffect } from "react";
import { getGates, getCheapRoutes } from "../../server/server";
import Button from "../../components/Button/Button";
import GateCard from "../../components/GatesComponents/GateCard/GateCard";
import {
  CheapTravelWrapper,
  CheapTravelBanner,
  CheapTravelContent,
  CheapTravelModal,
} from "./styles/CheapTravel.styles";
import { FormControl, FormLabel, Divider } from "@mui/joy";
import { MenuItem, Select } from "@mui/material";
import hero from "../../assets/hero3.png";
import noDataImg from "../../assets/undraw_void_-3-ggu.svg";

const CheapTravel = () => {
  const [data, setData] = useState();
  const [cheapRoute, setCheapRoute] = useState();
  const [toValue, setToValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  // transit travels

  console.log(cheapRoute, "new data");

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

    console.log(toCode, " to ", fromCode);
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
      {cheapRoute?.length === 0 && loading && (
        <div
          style={{
            marginTop: "8rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Loading deal ...
        </div>
      )}
      {cheapRoute ? (
        <>
          <div
            style={{
              marginTop: "8rem",
              display: "flex",
              justifyContent: "center",
              boxshadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "55%",
                backgroundColor: "#fff",
                border: "1px solid lightgray",
                borderRadius: "15px",
              }}
            >
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
                      fontSize: "1rem",
                      color: "black",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Departure
                  </p>
                  <p
                    className="journey-ticket-text"
                    style={{ fontSize: "1.8rem", marginBottom: "10px" }}
                  >
                    {cheapRoute?.from.name}
                  </p>
                  <p
                    className="journey-ticket-text"
                    style={{ fontSize: "0.8rem", marginBottom: "10px" }}
                  >
                    CODE: {cheapRoute?.from.code}
                  </p>
                </div>
                <Divider
                  orientation="vertical"
                  sx={{ height: "6.8rem", width: "2px" }}
                />

                <div>
                  <p
                    className="journey-ticket-text"
                    style={{
                      fontSize: "1rem",
                      color: "black",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Arrival
                  </p>
                  <p
                    className="journey-ticket-text"
                    style={{ fontSize: "1.8rem", marginBottom: "10px" }}
                  >
                    {cheapRoute?.to.name}
                  </p>
                  <p
                    className="journey-ticket-text"
                    style={{ fontSize: "0.8rem", marginBottom: "10px" }}
                  >
                    CODE: {cheapRoute?.to.code}
                  </p>
                </div>
                <div style={{ textAlign: "end", fontSize: "1.2rem" }}>
                  <p className="total-parking" style={{ fontSize: "1rem" }}>
                    Price{" "}
                  </p>
                  <p
                    className="total-parking"
                    style={{ fontSize: "2rem", fontWeight: "600" }}
                  >
                    £{cheapRoute?.totalCost.toFixed(2)}
                  </p>
                  <p
                    className="total-parking"
                    style={{ fontSize: "0.7rem", color: "gray" }}
                  >
                    Refundable{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>Related Routes</h1>
            {cheapRoute?.route.map((route) => (
              <div>
                <GateCard code={route} name={route} status="Boarding" getId />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            marginTop: "8rem",
            display: "grid",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          <img src={noDataImg} alt="no search" style={{ width: "15rem" }} />
          <p>No search made</p>
        </div>
      )}
    </>
  );
};

export default CheapTravel;
