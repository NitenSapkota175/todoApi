import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGaurd } from './auth/guard/jwt.guard';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtAuthGaurd());

  const options = new DocumentBuilder().setTitle("TodoApp-API").setDescription("Todo NestApp Rest Api Docs").setVersion("3.0").addBearerAuth({type : "http" ,scheme : "bearer",
  bearerFormat : "JWT",
  name : "JWT",
  description : "Enter JWT Token",
  in : "header"
},"JWT-auth").build()

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup("api" , app,document);
  await app.listen(3000);
}
bootstrap();
