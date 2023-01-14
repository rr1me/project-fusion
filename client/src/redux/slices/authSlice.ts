import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
    openAuth: boolean;
}

const initialState: CounterState = {
    openAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, {payload}) => {
            state.openAuth = payload;
        },
    },
});


export default authSlice.reducer;
export const {setUserData} = authSlice.actions;