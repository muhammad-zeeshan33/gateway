export class responseData<T> {
  success = true;
  message = '';
  exception: any = '';
  data: T = null;
  constructor(data: any) {
    this.data = data;
  }
}
