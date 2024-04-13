import swal from "sweetalert";
import { useForm } from "../hooks/useForm";
import { newReliclogs } from "../api/newRelicLogs";

const initialForm = {
    logType: '',
    service: '',
    level: '',
    nrApiKey: '',
    message: ''
}


export const SendLogOption1 = () => {

    const { logType, service, level, nrApiKey, message, onInputChange, onResetForm, areAllInputsFilled, formState } = useForm( initialForm );

    const onLogSubmit = ( event ) => {
        event.preventDefault();
        if (areAllInputsFilled()) {
            newReliclogs( formState );
        } else {
            swal({
                title: "Something is Wrong 🤔",
                text: "Please check that all the fields are completed..! ✅",
                icon: "error",
                button: "Try Again!"
            });
        }
        onResetForm();
    }

    return (
      <div className="log-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form onSubmit={ onLogSubmit }>
          <h3>Drop Us a Log</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="logType"
                  className="form-control"
                  placeholder="Log Type *"
                  value={ logType }
                  onChange={ onInputChange }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="service"
                  className="form-control"
                  placeholder="Service *"
                  value={ service }
                  onChange={ onInputChange }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="level"
                  className="form-control"
                  placeholder="Level *"
                  value={ level }
                  onChange={ onInputChange }
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="nrApiKey"
                  className="form-control"
                  placeholder="New relic API Key *"
                  value={ nrApiKey }
                  onChange={ onInputChange }
                />
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
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control message"
                  placeholder="Log Message *"
                  value={ message }
                  onChange={ onInputChange }
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}
