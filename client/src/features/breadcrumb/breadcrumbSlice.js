import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import breadcrumbAPI from './breadcrumbAPI';

const initialState = {
    
    crumbPath:[],
    crumbChildren:[]
}

export const showbreadcrumb = createAsyncThunk('breadcrumb/showbreadcrumb',async (data,thunkAPI)=>{
    try{
        console.log("data",data)
        let response = await breadcrumbAPI.showbreadcrumb(data);

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
        .addCase(showbreadcrumb.fulfilled,(state,action)=>{
            state.crumbChildren=action.payload
        })
        .addCase(showbreadcrumb.rejected,(state,action)=>{
            console.log(action.payload)
        })
    }
})

export default breadcrumbSlice.reducer
