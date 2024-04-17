import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_CUSTOM_LOGS, VITE_API_GETWAY_KEY } = getEnvVariables();
const apiGatewayUrl = VITE_API_URL_CUSTOM_LOGS;

export const newReliclogs = async (logMessage) => {

    console.log(JSON.stringify(logMessage));

    try {
        const { data } = await axios.post(apiGatewayUrl, logMessage, {
            headers: {
                'x-api-key': VITE_API_GETWAY_KEY,
            }
        });
        console.log({
            status: data.statusCode,
            msg: 'Log sent to New Relic'
        });
    } catch (err) {
        console.error('Error al enviar log a New Relic:', err);
    }
};