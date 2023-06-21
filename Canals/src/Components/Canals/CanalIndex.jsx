import React, {useContext} from "react";

import {useEffect} from "react";
import {CanalContext} from "../Context/CanalContext"
import {Link} from "react-router-dom";

export const CanalIndex = () =>
{
    const {canals,getCanals,deleteCanal} = useContext(CanalContext);
    useEffect(() =>
    {
        getCanals()

    },[])

    return(

        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Canal</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3"></th>



                    </tr>
                    </thead>
                    <tbody>
                    {canals.map((canal,index) =>
                    {
                        return (<tr key={index+1} className="bg-blue-500 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">{index+1}</th>
                            <td className="px-6 py-4">{canal.name}</td>
                            <td className="px-6 py-4">{canal.amount}</td>
                            <td>
                                 <Link to={`/canals/${canal.id}/edit`}
                                       className ="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                     Edit
                                 </Link>

                                <button onClick={ () =>deleteCanal(canal.id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      Delete
                                </button>

                            </td>

                        </tr>);
                    })}


                    </tbody>
                </table>
            </div>

        </div>
    )
}
