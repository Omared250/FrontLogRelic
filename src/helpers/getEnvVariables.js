
export const getEnvVariables = () => {

    // import.meta.env;

    return {
        // ...import.meta.env
        VITE_API_URL_CUSTOM_LOGS: import.meta.env.VITE_API_URL_CUSTOM_LOGS,
        VITE_API_URL_COPYPASTE_LOGS: import.meta.env.VITE_API_URL_COPYPASTE_LOGS,
        VITE_API_GETWAY_KEY: import.meta.env.VITE_API_GETWAY_KEY,
    }

};