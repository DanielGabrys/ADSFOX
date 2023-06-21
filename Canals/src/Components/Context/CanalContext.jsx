import {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8001/api/"

const CanalContext = createContext();

const initialForm =
    {
        name:'',
        amount:'',
    };


export const CanalProvider = ({children}) =>
{

        const [canals,setCanals] = useState([]);
        const [canal,setCanal] = useState([]);
        const [errors,setErrors] = useState({});
        const navigate = useNavigate();



    const getCanals = async () =>
    {
        const apiCanals = await axios.get('canals');
        setCanals(apiCanals.data.data);
    };

    const getCanal = async (id) =>
    {
        const response = await axios.get('canals/'+id);
        const apiCanal = response.data.data;
        setCanal(apiCanal);

        setFormValues(
            {
                name: apiCanal.name,
                amount: apiCanal.amount
            }
        );

    };

    const [formValues, setFormValues] = useState(
      initialForm
    );


    const onChange = (e) => {
        const {name,value} = e.target
        setFormValues({...formValues,[name]:value});

    };



    const storeCanal = async (e) =>
    {
        e.preventDefault();
        try
        {
            await axios.post("canals",formValues);
            setFormValues(initialForm);
            navigate('/canals');
        }
        catch (e)
        {
            if(e.response.status !==200)
            {
                setErrors(e.response.data.errors)
            }

        }
    }

    const updateCanal = async (e) =>
    {
        e.preventDefault();
        try
        {
            await axios.put("canals/"+canal.id,formValues);
            setFormValues(initialForm);
            navigate('/canals');
        }
        catch (e)
        {
            if(e.response.status !==200)
            {
                setErrors(e.response.data.errors)
            }

        }
    }

    const deleteCanal = async (id) =>
    {
            await axios.delete("canals/"+id);
            getCanals();
    }





    return <CanalContext.Provider
        value ={{
            canals,
            canal,
            getCanals,
            getCanal,
            onChange,
            formValues,
            errors,
            storeCanal,
            updateCanal,
            deleteCanal,
            setErrors,
        }}>{children}</CanalContext.Provider>;

};

export  {CanalContext};
