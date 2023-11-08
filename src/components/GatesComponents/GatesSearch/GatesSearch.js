import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGates } from "../../../server/server";
import hero from "../../../assets/hero3.png";
import { Input } from "@mui/joy";
import GateCard from "../GateCard/GateCard";
import {
  Banner,
  GatesSearchBar,
  GatesSearchContent,
  GatesSearchGrid,
  GatesSearchWrapper,
} from "./styles/GatesSearch.styles";
import Loading from "../../Loading/Loading";

const GatesSearch = () => {
  const [gates, setGates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getGates(setGates);
  }, []);

  const handleSearchValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNavigation = (code) => {
    navigate(`/starseeker/gates/gate-details/${code}`);
  };

  const filteredData =
    gates &&
    gates.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });

  return (
    <>
      <GatesSearchWrapper>
        <Banner>
          <img src={hero} alt="hero-banner" />
        </Banner>
        <GatesSearchContent>
          <div className="gate-info">
            <h1>Explore Interstellar Gates</h1>
          </div>
        </GatesSearchContent>
        <GatesSearchBar>
          <Input
            className="search-input"
            placeholder="search for a gate"
            onChange={handleSearchValueChange}
          />
        </GatesSearchBar>
      </GatesSearchWrapper>
      <GatesSearchGrid>
        {!filteredData && <Loading />}
        {filteredData &&
          filteredData.map((gate) => {
            return (
              <GateCard
                key={gate.uuid}
                code={gate.code}
                name={gate.name}
                status={"Boarding"}
                getId={() => handleNavigation(gate.code)}
              />
            );
          })}
      </GatesSearchGrid>
    </>
  );
};

export default GatesSearch;
