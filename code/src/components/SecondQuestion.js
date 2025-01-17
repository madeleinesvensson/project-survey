import React from "react";
import Header from "./Header";

export const SecondQuestion = ({
  adressInput,
  onAdressInputChange,
  onStepChange,
  onStepBackChange,
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
          <div>
            <h2>Var bor du?</h2>
            <label htmlFor="adressInput" className="input-label-container">
              Adress:
              <input
                id="adressInput"
                type="text"
                value={adressInput}
                onChange={onAdressInputChange}
                className="input-field"
              />
            </label>
          </div>
          <div className="button-wrapper">
            <button className="go-back-button" onClick={onStepBackChange}>
              Tillbaka
            </button>
            <button type="submit">Nästa</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecondQuestion;
