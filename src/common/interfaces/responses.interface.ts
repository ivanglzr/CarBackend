export interface Response {
  statusCode: number;
  message: string;
}

export type ExtendedResponse<K extends string, T> = Response & {
  [key in K]: T;
};
