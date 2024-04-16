import React from 'react'
import newRelicLogo from '/src/assets/newrleliclogo.png'

export const Home = () => {
    return (
        <div className='home'>
          <h1>Forwar logs to New Relic</h1>
          <img src={newRelicLogo} alt="Log Forwarding Illustration" />
          <p>
            This application is designed to forward logs into New Relic, providing you with two convenient options:
          </p>
          <ul>
            <li>
              <strong>Customize Log Fields:</strong> Use the full form to specify log details and tailor the information sent to New Relic.
            </li>
            <li>
              <strong>Copy and Paste:</strong> Quickly forward logs by copying and pasting them directly into the platform.
            </li>
          </ul>
        </div>
    );
}
