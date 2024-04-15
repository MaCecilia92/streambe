export const selectSession = (state) => state.session;
export const selectUsers = (state) => state.session.users;
export const selectStatus = (state) => state.session.status;
export const selectIsLoading = (state) => state.session.isLoading;
export const selectUserParams = (state) => state.session.userParams;
export const selectIsAuthenticated = (state) => state.session.isAuthenticated;
