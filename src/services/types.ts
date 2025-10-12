export interface IError {
  content: [];
  error: string;
}
export interface Params{
  page?: number;
}
interface InforDto{
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface ResponseProps<T>{
 info: InforDto;
 results: T[];
}