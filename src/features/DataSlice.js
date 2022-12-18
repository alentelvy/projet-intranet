import { createSlice} from '@reduxjs/toolkit'
import { getData } from './dataActions'


// const updateData = (state, action) => ({
//     ...state,
//     data: action.payload,
//   })

const initialState = {
  data: [],
  error: null,
  isLoading: false,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action) => {
        state.data = action.payload
        state.error = false
    },

    // extraReducers: {

    //     [getData.fulfilled]: (state, { payload }) => {
    //       state.loading = false
    //       state.data = payload
    //     }
    //   },
  }
})

// export const { updateData } = dataSlice.actions;
// export default dataSlice.reducer

const { actions, reducer } = dataSlice
export const { updateData } = actions;
export default reducer;