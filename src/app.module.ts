import { Module, MulterModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MulterModule.register({
      dest: './uploads',
    }),
    SharedModule,
    AuthModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
