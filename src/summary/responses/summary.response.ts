import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class SummaryResponse {
  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  gender: string;
}

export class SummaryResponseList {
  @Type(() => SummaryResponse)
  @ValidateNested()
  @IsNotEmpty()
  data: SummaryResponse[];
}
