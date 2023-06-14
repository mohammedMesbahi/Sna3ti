import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
function ModifieItemModal({ open, handleClose, item }) {
  const [modifiedItemName, setModifiedItemName] = useState(item.itemName);
  const [modifiedDescription, setModifiedDescription] = useState(
    item.description
  );
  const [modifiedPrice, setModifiedPrice] = useState(item.price);
  const [selectedImages, setSelectedImages] = useState([]);

  const [submitting, setSubmitting] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleSave = () => {
    // Perform save action with the modified item data and selected images
    // ...
    handleClose();
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages(imagesArray);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Item</DialogTitle>
      <Collapse in={openAlert} sx={{ marginTop: 1, alignSelf: "center", m: 1 }}>
        <Alert
          severity={alertSeverity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertMessage}
        </Alert>
      </Collapse>
      <DialogContent>
        <TextField
          label="Item Name"
          value={modifiedItemName}
          onChange={(e) => setModifiedItemName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={modifiedDescription}
          onChange={(e) => setModifiedDescription(e.target.value)}
          fullWidth
          multiline
        />
        <TextField
          label="Price"
          value={modifiedPrice}
          onChange={(e) => setModifiedPrice(e.target.value)}
          fullWidth
          type="number"
        />
        <Box mt={2}>
          <Typography variant="subtitle1">Selected Images:</Typography>
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
            }}
            spacing={1}
          >
            {selectedImages.map((imageSrc, index) => (
              <Box key={index}>
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Preview ${index}`}
                  style={{
                    // maxWidth: "100%",
                    marginTop: "8px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    width: "150px",
                    aspectRatio: "1/1",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        <input
          style={{ display: "none" }}
          id="images"
          type="file"
          accept="image/*"
          name="images"
          onChange={handleImageChange}
          multiple
        />
        <label htmlFor="images">
          <Button variant="outlined" component="span">
            Choose Images
          </Button>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModifieItemModal;
