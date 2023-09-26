import { useState } from "react";

import "./index.css";

import FieldForm from "../../component/field-form";
import Grid from "../../component/grid";

export default function Container({ onCreate, placeholder, button, id }) {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (value) => {
    return sendData({ value });

    //+++
  };

  const sendData = async (dataToSend) => {};

  return (
    <Grid>
      <FieldForm
        placeholder={placeholder}
        button={button}
        onSubmit={handleSubmit}
      />
    </Grid>
  );
}
