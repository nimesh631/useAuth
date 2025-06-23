// export type Avatar = {
//   _id: string;
//   localPath: string;
//   url: string;
// };

// export type User = {
//   __v: number; // ✅ fixed
//   _id: string;
//   avatar: Avatar;
//   createdAt: string;
//   email: string;
//   isEmailVerified: boolean;
//   loginType: "EMAIL_PASSWORD" | string;
//   role: "ADMIN" | "USER" | string;
//   updatedAt: string;
//   username: string;
// };

// export type LoginData = {
//   accessToken: string;
//   refreshToken: string;
//   user: User;
// };

// export type RegisterData = {
//   user: User;
// };

// export type ApiResponse<T> = {
//   data: T;
//   message: string;
//   statusCode: number;
//   success: boolean;
// };

// export type LoginResponse = ApiResponse<LoginData>;
// export type RegisterResponse = ApiResponse<RegisterData>;
