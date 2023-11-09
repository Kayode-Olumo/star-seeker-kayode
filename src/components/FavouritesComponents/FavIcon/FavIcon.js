import React from "react";
import { IconButton } from "@mui/joy";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";

const FavIcon = ({ page, clickFunc }) => {
  return (
    <div>
      {page === "favourite" && (
        <div className="fav-icon" onClick={clickFunc}>
          <IconButton
            color="danger"
            aria-label="Add to favorites"
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <DeleteIcon variant="danger" />
          </IconButton>
        </div>
      )}
      {page === "cheapTravel" && (
        <div className="fav-icon" onClick={clickFunc}>
          <IconButton color="danger" aria-label="Add to favorites">
            <FavoriteTwoToneIcon variant="danger" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default FavIcon;
