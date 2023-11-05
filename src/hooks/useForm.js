import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    useEffect(() => {
        areAllInputsFilled();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const areAllInputsFilled = () => {
        return Object.values(formState).every((value) => value.trim() !== '');
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        areAllInputsFilled,
    }
}