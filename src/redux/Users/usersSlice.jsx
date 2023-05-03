const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchUsers,
  fetchUser,
  deleteUser,
  addUser,
  updateUser,
} = require('./usersOperations');

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  currentUser: null,
};

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   extraReducers: {
//     [fetchUsers.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchUsers.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.users = action.payload;
//     },
//     [fetchUsers.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [fetchUser.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchUser.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.currentUser = action.payload;
//     },
//     [fetchUser.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteUser.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteUser.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.users = state.users.filter(user => user.id !== action.payload);
//     },
//     [deleteUser.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        const index = state.users.findIndex(user => user.id === payload.id);
        state.users = state.users.splice(index, 1, payload);
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
