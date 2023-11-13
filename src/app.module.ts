import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdottiModule } from './prodotti/prodotti.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewear/logger.middlewear';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ProdottiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +(process.env.POSTGRES_PORT ?? 5432),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // entities: ['**/*.entity{.ts,.js}'],
      autoLoadEntities: true, //risolve automaticamente i percorsi delle entities
      synchronize: true, //crea automaticamente lo schema(tabelle)
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('prodotti');
  }
}
