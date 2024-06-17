import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Екшени слайса для використання в dispatch
export const { changeFilter } = filtersSlice.actions;

// Функції-селектори для використання в useSelector
export const selectNameFilter = (state) => state.filters.name;

// Експортуємо редюсер слайса
export default filtersSlice.reducer;
