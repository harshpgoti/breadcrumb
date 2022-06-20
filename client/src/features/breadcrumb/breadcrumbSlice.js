import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import breadcrumbAPI from './breadcrumbAPI';

const initialState = {
    crumbPath:[],
    crumbChildren:[]
}

export const showBreadcrumb = createAsyncThunk('breadcrumb/showBreadcrumb',async (data,thunkAPI)=>{
    try{
        let response = await breadcrumbAPI.getBreadcrumb(data);

        if(response.error){
            return thunkAPI.rejectWithValue(response.error)
        }else{
            return response.path
        }
    }catch(error){
        const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})


export const breadcrumbSlice = createSlice({
    name:'breadcrumb',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(showBreadcrumb.fulfilled,(state,action)=>{
            state.crumbChildren=action.payload
        })
        .addCase(showBreadcrumb.rejected,(state,action)=>{
            console.log(action.payload)
        })
    }
})

export default breadcrumbSlice.reducer
