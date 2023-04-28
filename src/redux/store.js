const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./Users/usersSlice');

export const store = configureStore({
  reducer: usersReducer,
});
