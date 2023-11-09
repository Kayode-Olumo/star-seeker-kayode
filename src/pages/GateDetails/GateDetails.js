import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { handleSelectedGate } from "../../server/server";
import hero from "../../assets/hero3.png";
import Table from "@mui/joy/Table";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import {
  GatesDetailsWrapper,
  Banner,
  GatesDetailsContent,
  GateDetailsTable,
} from "./styles/GateDetails.styles";
import Button from "../../components/Button/Button";

const GateDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const [selectGate, setSelectedGate] = useState();

  useEffect(() => {
    handleSelectedGate(code, setSelectedGate);
  }, [code]);

  const handleViewDetails = (viewCode) => {
    navigate(`/starseeker/gates/gate-details/${viewCode}`);
  };

  return (
    <>
      <GatesDetailsWrapper>
        <Banner>
          <img src={hero} alt="hero-banner" />
        </Banner>
        <GatesDetailsContent>
          <div className="gate-details-info">
            <h1>Gates: {selectGate?.name}</h1>
          </div>
        </GatesDetailsContent>
      </GatesDetailsWrapper>
      <GateDetailsTable>
        <Table>
          <thead>
            <tr>
              <th>Gate Code</th>
              <th>Current Status</th>
              <th>Linked Gates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectGate?.code}</td>
              <td>Boarding</td>
              <td>{selectGate?.links.map((link) => `${link.code}, `)}</td>
            </tr>
          </tbody>
        </Table>

        <h2>Related Gates</h2>
        <br />
        <AccordionGroup>
          {!selectGate && "Loading..."}
          {selectGate?.links.map((link) => {
            return (
              <>
                <Accordion key={link.code}>
                  <AccordionSummary>{`${link.code}`}</AccordionSummary>
                  <AccordionDetails>
                    <Table>
                      <thead>
                        <tr>
                          <th>Au</th>
                          <th>Code</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{link.hu}</td>
                          <td>{link.code}</td>
                          <td>
                            <Button
                              text="view details"
                              clickFunc={() => handleViewDetails(link.code)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </AccordionGroup>
      </GateDetailsTable>
    </>
  );
};

export default GateDetails;
