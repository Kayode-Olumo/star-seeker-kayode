import React from "react";
import { Card, CardContent, CardOverflow, Typography } from "@mui/joy";
import { GateNotification, GateText } from "./styles/GateCard.styles";

const GateCard = ({ code, name, status, getId }) => {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: "auto", height: 100, cursor: "pointer" }}
      onClick={getId}
    >
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          {name}
        </Typography>
        <Typography level="body-sm" sx={{ display: "flex" }}>
          <GateNotification className="traffic-light blink-class" />{" "}
          <GateText>
            Gate Status: <span>{status}</span>
          </GateText>
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
        }}
      >
        Code: {code}
      </CardOverflow>
    </Card>
  );
};

export default GateCard;
