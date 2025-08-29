// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

import CabinTable from "../features/cabins/CabinTable-v11";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <p>Filter / Sort</p> */}
        <CabinTableOperations />
      </Row>

      {/* <Row> */}
      <CabinTable />

      <AddCabin />
      {/* </Row> */}
    </>
  );
}

export default Cabins;
