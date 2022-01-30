import React from 'react';
import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
  <div>
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="secondary" />
  </div> 
  )
};

export default Loader;
