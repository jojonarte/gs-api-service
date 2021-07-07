import { BaseModel } from 'src/database/models/base'

export class Phone extends BaseModel {
  public static tableName = 'phones'
  public name: string;
  public manufacturer: string;
  public description: string;
  public color: string;
  public price: number;
  public imageFileName: string;
  public screen: string;
  public processor: string;
  public ram: number;

  protected $transformJSON = {
    omit: ['deletedAt', 'createdAt', 'updatedAt'],
  }
}