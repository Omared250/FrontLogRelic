import axios from 'axios';

const apiGatewayUrl = 'https://c0adnzr3l1.execute-api.eu-west-1.amazonaws.com/prod/field-logs';

export const newReliclogs = async (logMessage) => {

    try {
        const { data } = await axios.post(apiGatewayUrl, logMessage);
        console.log({
            status: data.statusCode,
            msg: 'Log sent to New Relic'
        });
    } catch (err) {
        console.error('Error al enviar log a New Relic:', err);
    }
};