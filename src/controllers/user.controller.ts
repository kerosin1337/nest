import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserService } from "../services/user.service";
import { UserInterface } from "../interfaces/user.interface";

@Controller("user")
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get()
  async fundAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return "This action returns all users";
  // }
  //
  // @Get(":id")
  // findOne(@Param("id") id: number): string {
  //   console.log(id);
  //   return `user #${id}`;
  // }
  //
  // @Get("async")
  // async asyncFind(): Promise<any[]> {
  //   return [];
  // }
  //
  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return "Create user";
  // }
}