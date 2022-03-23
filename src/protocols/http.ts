export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type HttpRequest = {
  params?: {
    [key: string]: string;
  };
};
