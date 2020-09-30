// state/models/user.ts
export class User {
    constructor(public id: string,
                public name: string,
                public roles: string[] 
                ) {}
}