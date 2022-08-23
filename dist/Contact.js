"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(_id, _name, _address, _phones) {
        this._id = _id;
        this._name = _name;
        this._address = _address;
        this._phones = _phones;
    }
    get id() { return this._id; }
    get name() { return this._name; }
    get address() { return this._address; }
    get phones() { return this._phones; }
}
exports.Contact = Contact;
