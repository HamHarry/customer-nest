import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { SummaryEnum } from 'src/enums/summay.enum';

export class SummaryRequest {
  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsOptional()
  tel: string;

  @IsEnum(SummaryEnum)
  gender: string;
}

export class SummaryRequestList {
  @Type(() => SummaryRequest)
  @ValidateNested()
  @IsNotEmpty()
  summaryData: SummaryRequest;
}
