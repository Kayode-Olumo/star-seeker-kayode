import React, { useEffect, useState } from "react";
import hero from "../../assets/hero3.png";

import {
  FavouritesWrapper,
  FavouritesBanner,
  FavouriteslContent,
} from "./styles/Favourite.styles";
import FavCard from "../../components/FavouritesComponents/FavCard/FavCard";

const Favourites = ({ favoritesData, handleFavouritesRemoveClick }) => {
  console.log(favoritesData, "hi");
  const [data, setData] = useState();

  useEffect(() => {
    setData(favoritesData);
  }, [favoritesData]);
  return (
    <>
      <FavouritesWrapper>
        <FavouritesBanner>
          <img src={hero} alt="hero-banner" />
        </FavouritesBanner>
        <FavouriteslContent>
          <div className="fav-info">
            <h1>My Favourites</h1>
          </div>
        </FavouriteslContent>

        <div>
          <h1 style={{ margin: "30px 0" }}>Saved Routes</h1>
          <div className="fav-scroller fav-group snaps-inline">
            {data?.map((favourite, i) => {
              return (
                <>
                  <div className="fav-element" key={i}>
                    <FavCard
                      departure={favourite.from.name}
                      arrival={favourite.to.name}
                      price={favourite.totalCost}
                      toCode={favourite.to.code}
                      fromCode={favourite.from.code}
                      clickFunc={() =>
                        handleFavouritesRemoveClick(
                          favourite.from.uuid + favourite.to.uuid
                        )
                      }
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </FavouritesWrapper>
    </>
  );
};

export default Favourites;
