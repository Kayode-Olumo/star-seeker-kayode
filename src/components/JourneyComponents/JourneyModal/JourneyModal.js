import React from "react";
import { Card, CardContent, Typography, CardOverflow, Divider } from "@mui/joy";

const JourneyModal = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        variant="outlined"
        sx={{ width: 320 }}
        style={{
          width: "800px",
          height: "300px",
          marginTop: "30px",
        }}
      >
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              6.3k views
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              style={{ textAlign: "right", width: "100%" }}
            >
              Total Cost: £{}
            </Typography>
          </CardContent>
          <Divider inset="context" />
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">Yosemite National Park</Typography>
          <Typography level="body-sm">California</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default JourneyModal;
