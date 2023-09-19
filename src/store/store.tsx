import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice';

export const store = configureStore({
  reducer: {
    users:userSlice,
      //or add export {userSlice.reduce} or export default userSlice.reducer to userSlice.tsx, then ya can write users:userSlice, above
   },
})
export default store;
