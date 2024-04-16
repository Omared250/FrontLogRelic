import axios from "axios"

const apiUrl = 'https://wuxxdajwxh.execute-api.eu-west-1.amazonaws.com/prod/send-logs';

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
