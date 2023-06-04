import React from "react";
import { Container, Stack } from "@mui/material";
import { Skeleton } from "@mui/material";
function NewHandicrafts() {
  return (
    <Container sx={{display:'flex',flexDirection:'row',gap:1,flexWrap:'wrap'}} >
        {Array(10)
          .fill()
          .map((item, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width="24%"
              height={218}
              sx={{ my: 0.5 }}
            />
          ))}
    </Container>
  );
}

export default NewHandicrafts;
