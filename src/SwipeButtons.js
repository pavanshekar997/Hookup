import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon frontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_left">
        <CloseIcon frontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_star">
        <StarRateIcon frontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_right">
        <FavoriteIcon frontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon frontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
