
export type CanalContextType = {
    canals: ICanalsData[],
    canal: ICanalsData,
    getCanals: any ,
    getCanal: any,
    onChange: any,
    formValues:ICanalsData,
    errors: any,
    storeCanal: any,
    updateCanal: any,
    deleteCanal: any
    setErrors: any


};


export interface ICanalsData {
    id?: any | number,
    name: string,
    amount: number | string,
    created_at:string,
    updated_at:string,
}


export interface IChartData {
    labels: any | number,
    datasets: any,

}


