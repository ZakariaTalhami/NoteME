export class User {
    username: string;
    password?: string;
    
    constructor(init?: Partial<User>){
        Object.assign(this,init);
    }
}