export class Contact {
    constructor(public _id: number, public _name: string, public _address: string, public _phones: string[]) { }
    public get id(): number { return this._id }
    public get name(): string { return this._name }
    public get address(): string { return this._address }
    public get phones(): string[] { return this._phones }
}
