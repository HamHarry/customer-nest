import { Controller, Post, Body } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { CreateSummaryRequest } from './requests/summary.request';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Post()
  createSummary(@Body() createsummaryRequest: CreateSummaryRequest) {
    return this.summaryService.createSummary(createsummaryRequest);
  }
}
