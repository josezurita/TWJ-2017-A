/**
 * Created by jose.zurita on 16/6/17.
 */
export interface PasteleriaInterface {

  constructor(
    public id?: number,
    public nombre?: string,
    public ciudad?: string,
    public correo?: string,
    public createdAt?: Date,
    public updatedAt?: Date){
  }
}
