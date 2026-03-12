import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../../generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({ adapter: new PrismaMariaDb(process.env.DATABASE_URL!) });
    }

    async onModuleInit() {
        try {
            await this.$connect();
            await this.$queryRaw`SELECT 1`;
        } catch (error) {
            console.error('error:', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
