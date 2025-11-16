import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: {}
}

export const Bussins_Card = createSlice({
        name: 'Card',
        initialState,
        reducers: {
            Card: (state , action) => {
                state.info = action.payload
            }
        }
})

export default Bussins_Card.reducer
export const {Card} = Bussins_Card.actions;
