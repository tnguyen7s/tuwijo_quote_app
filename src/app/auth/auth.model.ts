export class Auth
{
  private _token: string;
  private expiredTimestampInSecond: number;

  constructor(token: string, expiredTimestampInSecond: number)
  {
    this._token = token;
    this.expiredTimestampInSecond = expiredTimestampInSecond;
  }

  get token(){
    if (this.expiredTimestampInSecond > new Date().getTime()/1000)
    {
      return this._token;
    }
    else
    {
      return null;
    }
  }
}
