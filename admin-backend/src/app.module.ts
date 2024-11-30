import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RopaModule } from './ropa/ropa.module';
import { WeatherModule } from './weather/weather.module';
import { ColorModule } from './color/color.module';
import { RecomendacionesModule } from './recomendaciones/recomendaciones.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ropacore:ropacore@cluster0.mi2yl.mongodb.net/ropacoredb?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    RopaModule,
    WeatherModule,
    ColorModule,
    RecomendacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
