export declare class UsersRepository {
    find({ id }: {
        id: any;
    }): Promise<any>;
    createUser({ dto }: {
        dto: any;
    }): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
    updateUser({ id, name, email }: {
        id: any;
        name: any;
        email: any;
    }): Promise<any>;
    deleteUser({ id }: {
        id: any;
    }): Promise<string>;
}
