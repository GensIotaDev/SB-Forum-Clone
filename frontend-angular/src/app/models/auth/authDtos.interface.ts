export interface RegisterRequest {
  username : string,
  email : string,
  password : string,
  birthday : Date,
  format_date: number,
  format_time: number
}

export interface LoginRequest {
  name : string,
  password : string
}

export interface AuthResponse {
  valid : boolean,
  error? : Map<string,string>
}
