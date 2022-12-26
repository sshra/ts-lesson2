const div = (a: number, b: number, rounding?: true): number => {
  let res = a / b;
  if (rounding) {
    res = Math.round(res);
  }
  return res;
}

div(15, 4, true);
div(15, 3);
div(10, 2);

type Student = {
  firstName: string,
  lastName: string,
  age: number,
  bornCity?: string,
}

type HttpResponsePending = {
  status: 'pending',
}

type HttpResponseSuccess = {
  status: 'success',
  data: [],
}

type HttpResponseFailed = {
  status: 'failed',
  error: string,
}

type HttpResponse =
  | HttpResponsePending
  | HttpResponseSuccess
  | HttpResponseFailed;

const fetchData = (res: HttpResponse): void => {
  if (res.status === 'pending') {
    res.status;
  }
  if (res.status === 'success') {
    res
  }
  if (res.status === 'failed') {
    console.log(res.error);
  }

}