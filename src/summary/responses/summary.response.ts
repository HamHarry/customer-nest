import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class SummaryResponse {
  @Expose()
  _id: string;

  @Expose()
  fname: string;

  @Expose()
  lname: string;

  @Expose()
  tel: string;

  @Expose()
  gender: string;
}
export class SummaryResponseList {
  @Type(() => SummaryResponse)
  @ValidateNested()
  @Expose()
  data: SummaryResponse[];
}
