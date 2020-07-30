import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { firstLetterToUpperCase } from "../helpers";

const SummaryContainer = styled.div`
  padding: 1rem;
  background-color: #f7f2f2;
  margin-top: 1rem;

  & > ul > li > span {
    font-weight: bold;
  }
`;
const SummaryTitle = styled.h2`
  text-align: center;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  // Don't show the component if it's empty
  if (brand === "" || year === "" || plan === "") return null;

  return (
    <SummaryContainer>
      <SummaryTitle>Resumen de cotización</SummaryTitle>
      <ul>
        <li>
          <span>Marca:</span> {firstLetterToUpperCase(brand)}
        </li>
        <li>
          <span>Año:</span> {firstLetterToUpperCase(year)}
        </li>
        <li>
          <span>Plan:</span> {firstLetterToUpperCase(plan)}
        </li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
