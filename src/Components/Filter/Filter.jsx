import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ select, setSelect }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> Фильтрация</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={select}
        onChange={e => setSelect(e.target.value)}
        sx={{ display: "flex", flexDirection: "row" }}>
        <FormControlLabel value="Напитки" control={<Radio />} label="Напитки" />
        <FormControlLabel value="Варенье" control={<Radio />} label="Варенье" />
        <FormControlLabel value="Салаты" control={<Radio />} label="Салаты" />
        <FormControlLabel
          value="Макароны"
          control={<Radio />}
          label="Макароны"
        />
        <FormControlLabel value="all" control={<Radio />} label="Все товары" />
      </RadioGroup>
    </FormControl>
  );
};

export default Filter;
