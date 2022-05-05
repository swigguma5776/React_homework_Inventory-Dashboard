import React from 'react'; 
import { useDispatch, useSelector, useStore } from 'react-redux'; 
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName,
    chooseBlades,
    chooseDescription,
    chooseDim,
    chooseEnergy,
    chooseGenerator,
    chooseMaterial,
    choosePrice,
    chooseRotor,
    chooseWeight,
    chooseWind } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface TurbineFormProps{
    id?: string;
    data?: {};
}

interface TurbineState{
    name: string;
    price: string;
    description: string;
    dimensions: string;
    blade_material: string;
    rotor_position: string;
    weight: string;
    wind_direction: string;
    generator: string;
    wind_energy_converted: string;
    number_of_blades: string; 

}

export const TurbineForm = (props:TurbineFormProps) => {
    const dispatch = useDispatch();
    let {turbineData, getData} = useGetData();
    const store = useStore();

    const name = useSelector<TurbineState>(state => state.name)
    const price = useSelector<TurbineState>(state => state.price)

    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name} \n ID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        } else{
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            dispatch(chooseDescription(data.description))
            dispatch(chooseDim(data.dimensions))
            dispatch(chooseBlades(data.number_of_blades))
            dispatch(chooseWeight(data.weight))
            dispatch(chooseWind(data.wind_direction))
            dispatch(chooseRotor(data.rotor_position))
            dispatch(chooseGenerator(data.generator))
            dispatch(chooseEnergy(data.wind_energy_converted))
            dispatch(chooseMaterial(data.blade_material))

            await serverCalls.create(store.getState());
            window.location.reload();
            event.target.reset();
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Turbine Name</label>
                    <Input {...register('name')} name='name' plaeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" plaeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" plaeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="number_of_blades">Number of Blades</label>
                    <Input {...register('number_of_blades')} name="number_of_blades" plaeholder="Number of Blades"/>
                </div>
                <div>
                    <label htmlFor="rotor_position">Rotor Position</label>
                    <Input {...register('rotor_position')} name="rotor_position" plaeholder="Rotor Position"/>
                </div>
                <div>
                    <label htmlFor="wind_direction">Wind Direction</label>
                    <Input {...register('wind_direction')} name="wind_direction" plaeholder="Wind Direction"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" plaeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" plaeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="blade_material">Blade Material</label>
                    <Input {...register('blade_material')} name="blade_material" plaeholder="Blade Material"/>
                </div>
                <div>
                    <label htmlFor="wind_energy_converted">Wind Energy Converted</label>
                    <Input {...register('wind_energy_converted')} name="wind_energy_converted" plaeholder="Wind Energy Converted"/>
                </div>
                <div>
                    <label htmlFor="generator">Generator</label>
                    <Input {...register('generator')} name="generator" plaeholder="Generator"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}