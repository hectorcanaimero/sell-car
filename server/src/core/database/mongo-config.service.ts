import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';
import { Inject, Injectable, Scope } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  createMongooseOptions(): MongooseModuleOptions {
    let db: string;
    let domain: string[];
    const uri = process.env.MONGO_DSN1;
    const host = this.request.headers['host'];
    if (host) {
      domain = host.split('.');
      if (domain[0] != '127' && domain[0] != 'www' && domain.length > 2) {
        db = domain[0];
        return {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          uri: `mongodb://${process.env.MONGO_DSN}/${db}?authSource=admin`,
        };
      }
      return {
        uri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    } else {
      return {
        uri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    }
  }
}
