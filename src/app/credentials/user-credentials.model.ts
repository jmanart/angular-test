export class UserCredentials {
    public email: string;
    public password: string;

    public get empty(): boolean {
        return (!this.email && !this.password);
    }
}
