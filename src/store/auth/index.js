import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'merttsnmzz',
        fullName: 'Mert Sönmez',
        avatar: 'https://pbs.twimg.com/profile_images/958166908129497088/xxsqqz6H_400x400.jpg'

    },
    accounts: []
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        //state manipule etme methodlari
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer