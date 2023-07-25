import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVendors } from '../../api/vendorApi';
import { VendorType } from '../../types/vendors';

interface InitialStateType {
  vendors: VendorType[];
  loading: boolean;
  openVendors: number;
}

const initialState: InitialStateType = {
  vendors: [],
  openVendors: 0,
  loading: false,
};

export const fetchVendorsAsync = createAsyncThunk(
  'vendors/fetchVendors',
  async (page: number) => {
    const response = await fetchVendors(page, 10, 35.754, 51.328);
    return response.data.data
  }
);

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendorsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendorsAsync.fulfilled, (state, action) => {
        return {
          ...state,
          vendors: [...state.vendors,...action.payload.finalResult],
          openVendors: action.payload.open_count,
          loading: false,
        };
      })
      .addCase(fetchVendorsAsync.rejected, (state) => {
        console.log(state);
      });
  },
});

export default vendorsSlice.reducer;
