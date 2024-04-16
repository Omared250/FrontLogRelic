import swal from "sweetalert";
import React, { useState } from "react";
import { Rocket } from "./Rocket";
import { copyPasteLogsOption } from "../api/copyPasteLogsOption";

export const SendLogsCopyPasteOption = () => {
  const [logValue, setLogValue] = useState("");
  const [nrApi, setNrApi] = useState("");
  const [repeatLog, setRepeatLog] = useState("");

  const clearUpStates = () => {
    setLogValue("");
    setNrApi("");
    setRepeatLog("");
  }

  const processLogValue = (value) => {
    let logObj;
    try {
      // Attempt to parse the value as JSON
      logObj = JSON.parse(value);
      
      if (!repeatLog) {
        swal({
          title: "Is not a valid time 🤔",
          text: "Please select a time option..! ✅",
          icon: "error",
          button: "Try Again!",
        });
        return;
      }

      if (!nrApi) {
        swal({
          title: "There is not API key 🤔",
          text: "Where am I supposed to send the log to ?.. 🤷🏽",
          icon: "error",
          button: "Try Again!",
        });
        return;
      }

      return {...logObj, nrApi, repeatLog};
    } catch (err) {
      swal({
        title: "JSON is Wrong 🤔",
        text: "Please check that you are introducing the log in the correct JSON format..! ✅",
        icon: "error",
        button: "Try Again!",
      });
      return err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    copyPasteLogsOption(processLogValue(logValue));
    // Here you would typically send the processedLog to an API or handle it as needed

    // Cleaning states
    clearUpStates();
  };

  return (
    <div className="log-form">
      <Rocket />
      <form onSubmit={handleSubmit}>
        <h3>Drop Us a Log</h3>
        <div className="column paste_log__form">
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control message"
                placeholder="Log Message *"
                value={logValue}
                onChange={(e) => setLogValue(e.target.value)}
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
                value={nrApi}
                onChange={(e) => setNrApi(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                name="repeat_log"
                id="repeat"
                className="repeat_log__input"
                value={repeatLog}
                onChange={(e) => setRepeatLog(e.target.value)}
              >
                <option value="" selected disabled>
                  Repeat Log
                </option>
                <option value="1">1 time</option>
                <option value="5">5 times</option>
                <option value="10">10 times</option>
                <option value="15">15 times</option>
                <option value="20">20 times</option>
              </select>
            </div>
            <div className="form-group">
              <input type="submit" name="btnSubmit" className="btnContact" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
