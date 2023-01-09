import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';
import { Inject, Injectable, Scope } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(
    @Inject(REQUEST) private readonly request,
    private readonly configService: ConfigService,
  ) {
    console.log('MongooseConfigService Init');
  }

  createMongooseOptions(): MongooseModuleOptions {
    const uri = process.env.MONGO_DSN1;
    console.log(uri);
    console.log('REQUEST ', this.request.data['host'].split('.'));
    return {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      uri,
    };
    // const uri = this.configService.get<string>('MONGODB_DSN1');
    // console.log('MongooseConfigService Init', uri);
    // let domain: string[];
    // let database = process.env.MONGO_DB;
    // console.log('REQUEST ', this.request.data['host'].split('.'));
    // if (this.request.data) {
    //   domain = this.request.data['host'].split('.');
    //   console.log(this.request);
    // } else {
    //   domain = this.request['headers']['host'].split('.');
    // }

    // console.log(domain);
    // if (domain[0] != '127' && domain[0] != 'www' && domain.length > 2) {
    //   database = 'tenant_' + domain[0];
    //   console.log('current DB', database);
    // }
    // return {
    //   uri: process.env.MONGO_DSN1,
    //   // uri: `mongodb://${process.env.MONGO_DSN}/${database}?authSource=admin`,
    // };
  }
}
