import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare as faLayerGroup } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faCoffee} />;
import { Grid, Stack } from "@mui/material";

const CreatItemTab = () => {
  const [itemName, setItemName] = React.useState("lorem ipsum");
  const [description, setDescription] = React.useState(
    "lorem ipsum lomusin simm smion"
  );
  const [price, setPrice] = React.useState(200);
  const [images, setImages] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("images", images);

    try {
      // change the URL to your server's endpoint
      const response = await fetch("/api/items", {
        method: "POST",
        body: formData,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    /*  setItemName("");
         setDescription("");
         setPrice("");
         setImages(null); */
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  return (
    <Stack
      component={"section"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <FontAwesomeIcon icon={faLayerGroup} fontSize={"2rem"} />
      <form
        onSubmit={handleSubmit}
        style={{ height: "50%", alignSelf: "center" }}
      >
        <Grid container spacing={2} width={7 / 12} flexGrow={1} margin={"auto"}>
          <Grid item xs={12}>
            <TextField
              name="itemName"
              label="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              fullWidth
              required
              inputProps={{
                min: 1,
              }}
            />
          </Grid>

          <Grid item xs={9}>
            <TextField
              name="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={1}
              inputProps={{
                placeholder: "A brief discription about the item",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <input
              style={{ display: "none" }}
              id="images"
              type="file"
              accept="image/*"
              name="images"
              required
              onChange={handleImageChange}
              multiple
            />
            <label htmlFor="images">
              <Button variant="outlined" fullWidth component="span">
                {"Choose a set of images for the item "}
              </Button>
            </label>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Stack>
  );
};
export default CreatItemTab;