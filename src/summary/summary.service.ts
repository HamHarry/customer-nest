import { Injectable, NotFoundException } from '@nestjs/common';
import { SummaryRequestList } from './requests/summary.request';
import { InjectModel } from '@nestjs/mongoose';
import { Summary, SummaryDocument } from './schemas/summary.schema';
import { Model } from 'mongoose';
import {
  SummaryResponse,
  SummaryResponseList,
} from './responses/summary.response';
import { modelMapper } from 'src/utils/mapper.utils';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel(Summary.name)
    private readonly summaryModel: Model<SummaryDocument>,
  ) {}

  async create(summaryRequestList: SummaryRequestList) {
    try {
      const { summaryData } = summaryRequestList;
      const name = `${summaryData.fname}_${summaryData.lname}`;

      const newSummary = {
        name,
        tel: summaryData.tel,
        gender: summaryData.gender,
      };

      const createdsummary = await new this.summaryModel(newSummary).save();
      return createdsummary;
    } catch (error) {
      console.log(error);
    }
  }

  async getSummary(): Promise<SummaryResponse[]> {
    try {
      const summary = await this.summaryModel.find();
      if (!summary) throw new NotFoundException('summary not found');

      const summarys = modelMapper(SummaryResponseList, {
        data: summary,
      }).data;

      return summarys;
    } catch (error) {
      console.log(error);
    }
  }
}
