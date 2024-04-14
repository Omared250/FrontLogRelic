import React, { useState } from "react";
import { Rocket } from "./Rocket";

export const SendLogOption2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidJSON, setIsValidJSON] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    try {
      // Attempt to parse the input value
      JSON.parse(event.target.value);
      // If no error is thrown, the input is valid JSON
      setIsValidJSON(true);
    } catch (error) {
      // If an error is thrown, the input is not valid JSON
      setIsValidJSON(false);
    }
  };

  return (
    <div className="log-form">
      <Rocket />
      <form>
        <h3>Drop Us a Log</h3>
        <div className="column paste_log__form">
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control message"
                placeholder="Log Message *"
                // value={message}
                // onChange={onInputChange}
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="form-group">
              <input
                type="password"
                name="nrApiKey"
                className="form-control"
                placeholder="New relic API Key *"
                // value={nrApiKey}
                // onChange={onInputChange}
              />
            </div>
            <div className="form-group">
                <select name="repeat_log" id="repeat" className="repeat_log__input">
                    <option value="" selected disabled>Repeat Log</option>
                    <option value="5">5 times</option>
                    <option value="10">10 times</option>
                    <option value="15">15 times</option>
                    <option value="20">20 times</option>
                </select>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                // value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
