export interface IUserCase<TRequest, TResponse> {
  execute(request: TRequest): Promise<UserCaseResponse<TResponse>>;    
}

type UserCaseFailResponse = {
  success: false,
  message: string
}

type UserCaseSuccessResponse<T> = {
  success: true,
  data?: T
}

export type UserCaseResponse<T> = UserCaseFailResponse | UserCaseSuccessResponse<T>;
