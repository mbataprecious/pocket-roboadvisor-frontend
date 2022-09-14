import React from "react";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value} risk score`;
}
const CustomSlider = ({ handleChange, value, color = "#000000" }) => {
  return (
    <Slider
      sx={{
        width: 300,
        height: 6,
        color: color,
        "& .MuiSlider-thumb": {
          backgroundColor: "white",
          border: `${color} 3px solid`,
          "&.Mui-focusVisible": {
            border: `${color} 3px solid`,
            boxShadow: "none",
            "&:before": {
              boxShadow: "none",
            },
          },
          "&.Mui-active": {
            boxShadow: "none",
            "&:before": {
              boxShadow: "none",
            },
          },
          "&:hover": {
            boxShadow: "none",
          },
          "&:before": {
            boxShadow: "none",
          },
        },
      }}
      value={value}
      onChange={handleChange}
      getAriaValueText={valuetext}
      valueLabelDisplay="off"
      step={1}
      min={0}
      max={10}
    />
  );
};

export default CustomSlider;
