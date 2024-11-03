import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Summary, SummaryDocument } from './schemas/summary.schema';
import { Model } from 'mongoose';
import { CreateSummaryRequest } from './requests/summary.request';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel(Summary.name)
    private readonly summaryModel: Model<SummaryDocument>,
  ) {}

  async createSummary(createsummaryRequest: CreateSummaryRequest) {
    try {
      const summary = createsummaryRequest.summaryData;
      const name = `${summary.fname}'_'${summary.lname}`;
      const price = summary.price * 32;

      const newSummary = {
        name,
        price,
        gender: summary.gender,
      };

      const createdSummary = await new this.summaryModel(newSummary).save();
      return createdSummary;
    } catch (error) {
      console.log(error);
    }
  }
}
