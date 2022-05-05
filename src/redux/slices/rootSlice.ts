import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Turbiner',
        price: 1000.00,
        description: "Baddass Turbine",
        generator: 'direct',
        number_of_blades: '3',
        rotor_position: 'vertical',
        dimensions: '250 x312 x 127mm',
        weight: ' 795 kg',
        wind_direction: 'upwind',
        wind_energy_converted: '20 w/m^2',
        blade_material: 'aluminum'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseGenerator: (state, action) => { state.generator = action.payload},
        chooseBlades: (state, action) => { state.number_of_blades = action.payload},
        chooseRotor: (state, action) => { state.rotor_position = action.payload},
        chooseDim: (state, action) => { state.dimensions = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseWind: (state, action) => { state.wind_direction = action.payload},
        chooseEnergy: (state, action) => { state.wind_energy_converted = action.payload},
        chooseMaterial: (state, action) => { state.blade_material = action.payload}
    }
})

// Exporting those Reducers (so much typing :())
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseGenerator, chooseBlades, 
    chooseRotor, chooseDim, chooseWeight, chooseWind, chooseEnergy, chooseMaterial} = rootSlice.actions
