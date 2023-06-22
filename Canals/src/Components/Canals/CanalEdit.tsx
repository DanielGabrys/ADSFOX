import React, {useContext} from "react";
import {CanalContext} from "../Context/CanalContext"
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CanalContextType} from "../../types/ContextCanal";

export const CanalEdit = () =>
{
    const {formValues, onChange, getCanal, errors, updateCanal,setErrors} = useContext(CanalContext) as CanalContextType;
    let {id} = useParams();

    useEffect(() =>
    {
        getCanal(id);
        setErrors({})

    },[])

    return(

        <div>

            <form onSubmit={updateCanal}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Canal Name</label>
                    <input type="text" id="name" name="name" value={formValues["name"]} onChange={onChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="canal name" required>
                    </input>

                    {errors.name && <span> { errors.name[0]}</span> }

                </div>

                <div className="mb-6">
                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="number" id="amount" name="amount" value={formValues["amount"]} onChange={onChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="amount" required>
                    </input>

                    {errors.amount && <span> { errors.amount[0]}</span> }

                </div>


                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update
                </button>
            </form>

        </div>
    )
}
