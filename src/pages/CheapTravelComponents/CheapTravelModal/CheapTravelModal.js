import React from "react";
import GateCard from "../../../components/GatesComponents/GateCard/GateCard";
import { Divider } from "@mui/joy";
import {
  ModalWrapper,
  ModalContent,
  ModalContainer,
} from "./styles/CheapTravelModal.styles";

const CheapTravelModal = ({ cheapRoute }) => {
  return (
    <>
      <ModalWrapper>
        <ModalContainer>
          <div className="main-content">
            <ModalContent>
              <p className="journey-ticket-text">Departure</p>
              <p className="journey-ticket-text journey-ticket-header">
                {cheapRoute?.from.name}
              </p>
              <p className="journey-ticket-text journey-ticket-code">
                CODE: {cheapRoute?.from.code}
              </p>
            </ModalContent>
            <Divider
              orientation="vertical"
              sx={{ height: "6.8rem", width: "2px" }}
            />

            <ModalContent>
              <p className="journey-ticket-text">Arrival</p>
              <p className="journey-ticket-text journey-ticket-header">
                {cheapRoute?.to.name}
              </p>
              <p className="journey-ticket-text journey-ticket-code">
                CODE: {cheapRoute?.to.code}
              </p>
            </ModalContent>
            <div className="journey-ticket-price">
              <p className="total-parking">Price </p>
              <p className="total-parking-cost">
                £{cheapRoute?.totalCost.toFixed(2)}
              </p>
              <p className="total-parking-refund">Refundable </p>
            </div>
          </div>
        </ModalContainer>
      </ModalWrapper>
      <div>
        <h1>Related Routes</h1>
        {cheapRoute?.route.map((route) => (
          <div>
            <GateCard code={route} name={route} status="Boarding" getId />
          </div>
        ))}
      </div>
    </>
  );
};

export default CheapTravelModal;
