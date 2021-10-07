import { useState } from "react";


const useForm = ( initValues ) =>
{
    const [form, setForm] = useState(initValues);
  

    const handleInputChange = ({ target }) =>
    {
        setForm( (state) => 
        ({
            ...state, [target.name] : target.type === "checkbox" ? target.checked : target.value 
        }))
    }

    const reset = () => setForm( initValues );

    return [ form, handleInputChange, reset ];
}


export { useForm };
