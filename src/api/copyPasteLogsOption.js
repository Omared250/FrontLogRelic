import axios from "axios"
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_COPYPASTE_LOGS } = getEnvVariables();
const apiUrl = VITE_API_URL_COPYPASTE_LOGS;

export const copyPasteLogsOption = async (logValue) => {
    try {
        const { data } = await axios.post(apiUrl, logValue);
        console.log({
            status: data.statusCode,
            msg: 'Log sent to New Relic'
        });
    } catch (err) {
        console.error('Error al enviar log a New Relic:', err);
    }
};
