export interface IError {
  content: [];
  error: string;
}
export interface Params{
  page?: string;
  name?: string;
}
export interface InforDto{
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface ResponseProps<T>{
 info: InforDto;
 results: T[];
}