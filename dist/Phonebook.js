"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhonebook = void 0;
const Contact_1 = require("./Contact");
class Phonebook {
    constructor(_contactList, index = 0) {
        this._contactList = _contactList;
        this.index = index;
        this._contactList = [
            new Contact_1.Contact(1, 'Liran', 'Yonatan ratush 12', ['0586167657', '039242816']),
            new Contact_1.Contact(2, 'Linor', 'Yafa yarkoni 18', ['0526546548', '084564623']),
            new Contact_1.Contact(3, 'Yoni', 'Nisim aloni 35', ['0544564569', '0456454899']),
            new Contact_1.Contact(4, 'Daniel', 'Nisim aloni 86', ['052546546', '0345648971']),
            new Contact_1.Contact(5, 'Savy', 'Yahalom 26', ['0540565465', '035489716']),
            new Contact_1.Contact(6, 'Omri', 'Ramat Hagolan 40', ['059456462', '0398574982']),
            new Contact_1.Contact(7, 'Moran', 'Atlit 2 ', ['0526545462', '045649812']),
            new Contact_1.Contact(8, 'Maayan', 'Atlit 2', ['0536546654', '034564489']),
            new Contact_1.Contact(9, 'Or', 'Even gvirol 89', ['0545645654', '032544912']),
            new Contact_1.Contact(10, 'Yossi', 'Manchester 68', ['0525465489', '023155495']),
            new Contact_1.Contact(11, 'Shlomi', 'Yigal alon 90', ['052546498', '036549812'])
        ];
    }
    size() {
        return this._contactList.length;
    }
    add(contact) {
        this._contactList.push(contact);
        return contact.id;
    }
    addPhone(id, phone) {
        const currentContact = this._contactList.find(contact => contact.id === id);
        currentContact === null || currentContact === void 0 ? void 0 : currentContact.phones.push(phone);
    }
    get(input) {
        if (typeof input === 'string') {
            return this._contactList.filter(contact => contact.name === input);
        }
        else if (typeof input === 'number') {
            return this._contactList.find(contact => contact.id === input);
        }
    }
    remove(id) {
        const currentContact = this._contactList.find(contact => contact.id === id);
        if (currentContact) {
            this._contactList = this._contactList.filter(contact => contact.id !== id);
        }
        return currentContact;
    }
    next() {
        if (this.index < this._contactList.length) {
            return {
                done: false,
                value: this._contactList[this.index++]
            };
        }
        return { done: true };
    }
    [Symbol.iterator]() {
        this._contactList = this._contactList.sort((a, b) => {
            if (a._name > b._name) {
                return 1;
            }
            else if (a._name < b._name) {
                return -1;
            }
            else {
                return -1;
            }
        });
        return this;
    }
}
function createPhonebook() {
    return new Phonebook([]);
}
exports.createPhonebook = createPhonebook;
