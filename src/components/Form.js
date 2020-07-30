import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { getYearDifference, calculateBrand, getPlan } from "../helpers.js";

//Styled components
const OptionContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px dsolid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const FormButton = styled.button`
  background-color: red;
  font-size: 25px;
  width: 100%;
  padding: 0.6rem;
  color: #fff;
  font-weight: bold;
  border: none;
  margin-top: 2rem;
  border-radius: 2px 2px 2px 2px;

  transition: background 0.3s ease;

  &:hover {
    background: crimson; /* fallback for old browsers */
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: #c90000;
  color: white;
  padding: 0.6rem;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 4px 4px 4px 4px;
`;

const Form = ({ setSummary, setCharging }) => {
  // States
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  // Extract the data from the State
  const { brand, year, plan } = data;

  // Read data from the Form and put it in the State
  const saveData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // On Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Base de 2000
    let result = 2000;

    // Get the year difference
    const yearDifference = getYearDifference(year);

    // each year less 3%
    result -= (yearDifference * 3 * result) / 100;

    // Americano 15%
    result = calculateBrand(brand) * result;

    // Europero 5%
    result = calculateBrand(brand) * result;

    // Asiático 30%
    result = calculateBrand(brand) * result;

    // Plan Básico increases 20%
    // Plan Completo increases 50%
    const planIncrement = getPlan(plan);
    result = parseFloat(planIncrement * result).toFixed(2); //only 2 digits

    setCharging(true);
    setTimeout(() => {
      //Disable spinner
      setCharging(false);
      //Total
      setSummary({
        quotation: Number(result),
        data,
      });
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}

      <OptionContainer>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={saveData}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </OptionContainer>
      <OptionContainer>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={saveData}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </OptionContainer>
      <OptionContainer>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={saveData}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={saveData}
        />{" "}
        Completo
      </OptionContainer>
      <FormButton type="submit">Cotizar</FormButton>
    </form>
  );
};

// PropTypes
Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setCharging: PropTypes.func.isRequired,
};

export default Form;
