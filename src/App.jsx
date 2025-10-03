import { useState } from "react";
import Listing from "./components/listingComponent";
function App() {
  const foodItems = ["dal", "chawal", "roti"];

  return (
    <>
      <h1>Food Items</h1>
      {foodItems.map((item) => (
        <Listing obj={{ item: item, name: "Asim" }}></Listing>
      ))}
    </>
  );
}

export default App;
