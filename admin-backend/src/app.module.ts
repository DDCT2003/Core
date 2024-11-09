import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ropacore:ropacore@cluster0.mi2yl.mongodb.net/ropacoredb?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
