import { Module } from "@nestjs/common";
import { UserModule } from "./user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "test",
      synchronize: true
    })
  ]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
}
