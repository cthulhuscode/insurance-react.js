import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Msg = styled.p`
  background-color: #f7f2f2;
  margin-top: 2rem;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
`;
const QuotationContainer = styled.div`
  text-align: center;
  padding: 0.1rem;
  background-color: #c90000;
  margin-top: 1rem;
  position: relative;
`;
const QuotationMsg = styled.p`
  color: white;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;

const Result = ({ quotation }) => {
  return quotation === 0 ? (
    <Msg>Elige marca, año y plan</Msg>
  ) : (
    <QuotationContainer>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <QuotationMsg>
            El total es: <span>${quotation}</span>
          </QuotationMsg>
        </CSSTransition>
      </TransitionGroup>
    </QuotationContainer>
  );
};

Result.propTypes = {
  quotation: PropTypes.number.isRequired,
};

export default Result;
