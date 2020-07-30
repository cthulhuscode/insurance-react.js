import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  background: #e34949; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e96443,
    #e34949
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, red, #e96443);
  font-family: "Mulish", "Open Sans", Arial, Helvetica, sans-serif;

  border: none;
  border-radius: 0px 0px 4px 4px;

  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const HeaderH1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Open Sans", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  /* With no styled components
    <header>
        <h1>{titulo}</h1>
    </header>
  */
  return (
    <HeaderContainer>
      <HeaderH1>{title}</HeaderH1>
    </HeaderContainer>
  );
};

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
