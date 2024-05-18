import { createSlice, Dispatch } from '@reduxjs/toolkit';
// utils
import axios from 'src/utils/axios';
// @types
import { IAdminsDialogState, ICreateAdmin, IUpdateAdmin } from 'src/@types/admins';

// ----------------------------------------------------------------------

const initialState: IAdminsDialogState = {
  isLoading: false,
  adminUsers: [],
  error: null,
  deleteDialogOpen: false,
  editDialogOpen: false,
  newDialogOpen: false,
  selectedAdminUser: null,
};

const slice = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET USERS
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.adminUsers = action.payload;
    },
    // GET USER
    getUserSuccess(state, action) {
      state.isLoading = false;
      state.selectedAdminUser = action.payload;
    },
    // Create User
    createUserSuccess(state, action) {
      state.isLoading = false;
      state.adminUsers = [...state.adminUsers, action.payload];
    },
    // Update User
    updateUserSuccess(state, action) {
      state.isLoading = false;
      const index = state.adminUsers.findIndex(value => value._id === action.payload.userId);
      state.adminUsers.splice(index, 1, {
        ...state.adminUsers[index],
        ...action.payload.data,
      })
    },
    // Delete User
    deleteUserSuccess(state, action) {
      state.isLoading = false;
      const index = state.adminUsers.findIndex(value => value._id === action.payload);
      state.adminUsers.splice(index, 1);
    },
    // Suspend User
    suspendUserSuccess(state, action) {
      state.isLoading = false;
      const index = state.adminUsers.findIndex(value => value._id === action.payload);
      state.adminUsers.splice(index, 1, {
        ...state.adminUsers[index],
        status: state.adminUsers[index].status === 'active' ? 'suspended' : 'active',
      })
    },
    setErrorToNull(state) {
      state.error = null;
    }
    // handleDeleteClickOpen(state) {
    //   state.deleteDialogOpen = true;
    // },
    // handleDeleteClickClose(state) {
    //   state.deleteDialogOpen = false;
    // },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  setErrorToNull,
  // handleDeleteClickOpen,
  // handleDeleteClickClose,
} = slice.actions;

export function getAdminUsers(organizationId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/api/v1/admins/all/${organizationId}`);
      console.log('getUsers:', response.data);

      dispatch(slice.actions.getUsersSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAdminUser(userId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/api/v1/admins/${userId}`);
      console.log("get single admin user:::", response.data);

      dispatch(slice.actions.getUserSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createAdminUser(data: ICreateAdmin) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post(`/api/v1/admins`, data);
      dispatch(slice.actions.createUserSuccess(response.data.data));
      return response.data.data;
    } catch (error) {
      await dispatch(slice.actions.hasError(error));
      return error
    }
  };
}

// ----------------------------------------------------------------------

export function updateAdminUser(userId: string, data: IUpdateAdmin) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.put(`/api/v1/admins/${userId}`, data);
      dispatch(slice.actions.updateUserSuccess({userId, data}));
      return response.data.data;
    } catch (error) {
      console.error(error);
      await dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

// ----------------------------------------------------------------------

export function deleteAdminUser(userId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      // await axios.post(`/api/v1/admins/delete`, { selected: userIds });
      // console.log('deleteUser:');
      //
      // await Promise.all( userIds.map( async userId => {
      //   dispatch(slice.actions.deleteUserSuccess(userId));
      // }));
      await axios.delete(`/api/v1/admins/${userId}`);
      dispatch(slice.actions.deleteUserSuccess(userId));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function suspendAdminUser(userId: string, status: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post(`/api/v1/admins/suspend/${userId}`, { status });
      console.log('suspendAdminUser:');
      dispatch(slice.actions.suspendUserSuccess(userId));

    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function resetPasswordAdminUser(userId: string, newPassword: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post(`/api/v1/admins/reset-password/${userId}`, { newPassword });
      console.log('reset-password:');
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
