// // utils/axiosInstance.ts
// import axios from "axios";
// // import { useAuth } from "../context/AuthContext"; // optional depending on setup

// const axiosInstance = axios.create({
//   baseURL: "/api",
//   // withCredentials: true, // send cookies
// });

// // setup interceptors
// export const setupInterceptors = (refreshTokenFn: () => Promise<string | null>) => {
//   axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       if (error.response?.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;

//         const newToken = await refreshTokenFn();
//         if (newToken) {
//           axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
//           originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//           return axiosInstance(originalRequest);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );
// };

// export default axiosInstance;
