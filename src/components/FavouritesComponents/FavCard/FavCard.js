import React, { useState, useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import FavIcon from "../FavIcon/FavIcon";

const FavCard = ({
  departure,
  arrival,
  price,
  toCode,
  fromCode,
  clickFunc,
}) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update the date when the component is mounted
    updateDate();
  }, []);

  const updateDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Formats as "MM/DD/YYYY" or "YYYY-MM-DD", depending on the user's locale

    setCurrentDate(formattedDate);
  };
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardContent>
        <Typography level="body-sm">
          Departure: {departure}-{fromCode}
        </Typography>
        <Typography level="body-sm">
          Arrival: {arrival}-{toCode}
        </Typography>
        <Typography level="body-sm">
          Total price: £{price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        sx={{ bgcolor: "background.level1", paddingBottom: "10px" }}
      >
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            {currentDate}
          </Typography>
        </CardContent>
        <FavIcon page={"favourite"} clickFunc={clickFunc} />
      </CardOverflow>
    </Card>
  );
};

export default FavCard;
