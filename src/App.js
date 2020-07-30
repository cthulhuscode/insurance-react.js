import React, { useState } from "react";

import styled from "@emotion/styled";

//Components
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

//Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 2px 2px 2px 2px;
`;

function App() {
  const [summary, setSummary] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [charging, setCharging] = useState(false);

  const { data, quotation } = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <FormContainer>
        <Form setSummary={setSummary} setCharging={setCharging} />
        {charging ? <Spinner /> : null}
        <Summary data={data} />
        {!charging ? <Result quotation={quotation} /> : null}
      </FormContainer>
    </Container>
  );
}
export default App;
