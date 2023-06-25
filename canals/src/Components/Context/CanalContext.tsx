import {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {CanalContextType,ICanalsData} from "../../types/ContextCanal";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST

const CanalContext = createContext<CanalContextType | null >(null);

const  initialForm =
    {
        id: null,
        name:'',
        amount:"",
        created_at: "",
        updated_at: ""
    };



export const CanalProvider = ({children}:any) =>
{

        const [canals,setCanals] = useState<Array<ICanalsData>>([]);
        const [canal,setCanal] = useState<ICanalsData>(initialForm);
        const [errors,setErrors] = useState({});
        const navigate = useNavigate();




    const getCanals = async () =>
    {
        try {
            const apiCanals = await axios.get('canals');
            setCanals(apiCanals.data.data);
            
        }
        catch (e:any)
        {
            setCanals([])
        }


    };

    const getCanal = async (id:number) =>
    {

        try
        {
        const response = await axios.get('canals/'+id);
        const apiCanal = response.data.data;
        setCanal(apiCanal);

        setFormValues(
            {
                id: null,
                name: apiCanal.name,
                amount: apiCanal.amount,
                created_at: "",
                updated_at: ""
            }
        );

        }
        catch (e:any)
        {
            navigate ('canals/create')
        }


    };

    const [formValues, setFormValues] = useState(
      initialForm
    );


    const onChange = (e:any) => {
        const {name,value} = e.target
        setFormValues({...formValues,[name]:value});

    };



    const storeCanal = async (e:any) =>
    {
        e.preventDefault();
        try
        {
            await axios.post("canals",formValues);
            setFormValues(initialForm);
            navigate('/canals');
        }
        catch (e:any)
        {
            if(e.response.status !==200)
            {
                setErrors(e.response.data.errors)
            }

        }
    }

    const updateCanal = async (e:any) =>
    {
        e.preventDefault();
        try
        {
            await axios.put("canals/"+canal.id,formValues);
            setFormValues(initialForm);
            navigate('/canals');
        }
        catch (e:any)
        {
            if(e.response.status !==200)
            {
                setErrors(e.response.data.errors)
            }

        }
    }

    const deleteCanal = async (id:number) =>
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
