import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useSWR from "swr";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function HandicraftSearchBar() {
  const [inputValue, setInputValue] = React.useState("");
  const { data: { data: options = [] } = {}, error } = useSWR(
    inputValue ? `/api/resources/handicrafts?fullName=${inputValue}` : null,
    fetcher
  );
  console.log(options);
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.fullName}
      renderOption={(props, option) => (
        <div {...props}>
          <img
            src={option.profileImage}
            alt={option.fullName}
            style={{ width: "50px", marginRight: "10px", borderRadius: "50%" }}
          />
          {option.fullName}
        </div>
      )}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search for handicrafts" fullWidth={true} />
      )}
    />
  );
}
