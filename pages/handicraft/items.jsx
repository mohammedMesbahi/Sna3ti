import Error from "@/components/Error";
import Items from "@/components/Items";
import axios from "axios";
import React from "react";

function items({ items, error }) {
  if (error) {
    return <Error error={error} />;
  }
  return <Items items={items}></Items>;
}

export default items;
export async function getStaticProps() {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/resources/items?populateHandicraft=true"
    );
    const items = res.data.data;
    return {
      props: {
        items,
      },
    };
  } catch (error) {
    // Check if error response exists and if status is 500
    return {
      props: {
        error: error.response.data || {}
      },
    };
  }
}
