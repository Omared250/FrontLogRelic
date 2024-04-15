import axios from "axios"

const apiUrl = 'https://log-api.eu.newrelic.com/log/v1';

// Helper function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const copyPasteLogsOption = async (logValue) => {

    let requestLog = typeof logValue === 'string' ? JSON.parse(logValue) : logValue;
    let nrApi;
    let repeatLog;

    Object.keys(requestLog).forEach((e) => {
        if (e.toLowerCase().includes('timestamp')) {
            delete requestLog[e]
        }

        if (e.toLowerCase().includes('nrapi')) {
            nrApi = requestLog[e];
            delete requestLog[e];
        }

        if (e.toLowerCase().includes('repeatlog')) {
            repeatLog = parseInt(requestLog[e], 10);
            delete requestLog[e];
        }
    })

    for (let i = 0; i < repeatLog; i++) {
        try {
            const response = await axios.post(apiUrl, requestLog, {
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Key': nrApi,
                }
            });
            console.log(`Log enviado a New Relic (Intento ${i + 1}):`, response.status);
        } catch (err) {
            console.error(`Error al enviar log a New Relic (Intento ${i + 1}):`, err);
        }

        await delay(1000);
    }
}
