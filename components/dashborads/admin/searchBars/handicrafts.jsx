import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function HandicraftSearchBar() {
  const [inputValue, setInputValue] = React.useState("");
  const { data: { data: options = [] } = {}, error } = useSWR(
    inputValue ? `/api/admins/handicrafts?fullName=${inputValue}` : null,
    fetcher
  );
  // console.log(options);
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Autocomplete
    
      options={options}
      getOptionLabel={(option) => option.fullName}
      renderOption={(props, option) => (
        <Link href={`/admin/dashboard/handicrafts/${option._id}`}>
          <div {...props}>
            <img
              src={option.profileImage}
              alt={option.fullName}
              style={{
                width: "50px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            {option.fullName}
          </div>
        </Link>
      )}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search For A Handicraft"
          fullWidth={true}
        />
      )}
    />
  );
}
