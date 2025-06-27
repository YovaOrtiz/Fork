import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('')
export class UsersController {
    constructor(private usersService: UsersService){}

    @ApiTags('users')
    @UseGuards(JwtAuthGuard)
    @Get('/users')
    getUsers(){
        return this.usersService.getUsers();
    } 

    @Post('/users')
    @ApiTags('users')
    createUser(@Body()user: CreateUserDto){
        return this.usersService.createUser(user);
    }

    @Put('/users/:id')
    @ApiTags('users')
    updateUser(@Param('id') id: string, @Body() updates: any) {
        return this.usersService.updateUser(id, updates);
    }

    @Delete('/users/:id')
    @ApiTags('users')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }

    /**
     * Ruta protegida para obtener el perfil del usuario autenticado
     */
    @UseGuards(JwtAuthGuard)
    @Get('/users/profile')
    getProfile(@Req() req) {
        return req.user;
    }

    /**
     * Ruta solo para administradores
     */
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Get('/admin/only')
    getAdminResource(@Req() req) {
        return { message: `¡Hola ${req.user.name}, solo los administradores pueden ver esto!`, user: req.user };
    }
}
