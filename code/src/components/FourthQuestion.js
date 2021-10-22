import React from "react";
import Header from "./Header";

export const FourthQuestion = ({
  satisfactionInput,
  onSatisfactionInputChange,
  onStepChange,
}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <form onSubmit={onStepChange} className="content-container">
          <h2> Är du nöjd med utdeling av din post?</h2>
          <div className="options-spacing">
            <label htmlFor="SatisfactionYes" className="radio-button-container">
              Ja
              <input
                id="SatisfactionYes"
                type="radio"
                value="Ja"
                name="radio"
                onChange={onSatisfactionInputChange}
                checked={satisfactionInput === "Ja"}
                required="required"
              />
              <span className="radio-button"></span>
            </label>
            <label htmlFor="SatisfactionNo" className="radio-button-container">
              Nej
              <input
                id="SatisfactionNo"
                type="radio"
                value="Nej"
                name="radio"
                onChange={onSatisfactionInputChange}
                checked={satisfactionInput === "Nej"}
                required="required"
              />
              <span className="radio-button"></span>
            </label>
          </div>
          <button type="submit">Nästa</button>
        </form>
      </div>
    </>
  );
};
export default FourthQuestion;
