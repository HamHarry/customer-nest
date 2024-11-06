import { Controller, Post, Body, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { SummaryRequestList } from './requests/summary.request';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Post()
  create(@Body() summaryRequestList: SummaryRequestList) {
    return this.summaryService.create(summaryRequestList);
  }

  @Get()
  getSummary() {
    return this.summaryService.getSummary();
  }
}
