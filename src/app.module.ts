import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatingController } from './rating/controllers/rating.controller';
import { RatingService } from './rating/services/rating.service';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [RatingModule],
  controllers: [AppController, RatingController],
  providers: [AppService, RatingService],
})
export class AppModule {}
