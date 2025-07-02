import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        username: string;
        role: string;
        resetToken: string | null;
        resetTokenExp: Date | null;
        emailToken: string | null;
        emailConfirmed: boolean;
    }[]>;
    createUser(user: CreateUserDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        username: string;
        role: string;
        resetToken: string | null;
        resetTokenExp: Date | null;
        emailToken: string | null;
        emailConfirmed: boolean;
    }>;
    updateUser(id: string, updates: any): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        username: string;
        role: string;
        resetToken: string | null;
        resetTokenExp: Date | null;
        emailToken: string | null;
        emailConfirmed: boolean;
    }>;
    deleteUser(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        username: string;
        role: string;
        resetToken: string | null;
        resetTokenExp: Date | null;
        emailToken: string | null;
        emailConfirmed: boolean;
    }>;
    getProfile(req: any): any;
    getAdminResource(req: any): {
        message: string;
        user: any;
    };
}
