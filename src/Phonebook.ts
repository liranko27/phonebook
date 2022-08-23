import { Contact } from "./Contact";
import { IPhonebook } from "./IPhonebook";

class Phonebook implements IPhonebook {
    constructor(private _contactList: Contact[], private index: number = 0) {
        this._contactList = [
            new Contact(1, 'Liran', 'Yonatan ratush 12', ['0586167657', '039242816']),
            new Contact(2, 'Linor', 'Yafa yarkoni 18', ['0526546548', '084564623']),
            new Contact(3, 'Yoni', 'Nisim aloni 35', ['0544564569', '0456454899']),
            new Contact(4, 'Daniel', 'Nisim aloni 86', ['052546546', '0345648971']),
            new Contact(5, 'Savy', 'Yahalom 26', ['0540565465', '035489716']),
            new Contact(6, 'Omri', 'Ramat Hagolan 40', ['059456462', '0398574982']),
            new Contact(7, 'Moran', 'Atlit 2 ', ['0526545462', '045649812']),
            new Contact(8, 'Maayan', 'Atlit 2', ['0536546654', '034564489']),
            new Contact(9, 'Or', 'Even gvirol 89', ['0545645654', '032544912']),
            new Contact(10, 'Yossi', 'Manchester 68', ['0525465489', '023155495']),
            new Contact(11, 'Shlomi', 'Yigal alon 90', ['052546498', '036549812'])
        ]
    }
    size(): number {
        return this._contactList.length
    }
    add(contact: Contact): number {
        this._contactList.push(contact)
        return contact.id
    }
    addPhone(id: number, phone: string): void {
        const currentContact: Contact | undefined = this._contactList.find(contact => contact.id === id)
        currentContact?.phones.push(phone)
    }

    get(id: number): Contact | undefined;
    get(name: string): Contact[] | undefined;
    get(input: unknown): Contact | Contact[] | undefined {
        if (typeof input === 'string') {
            return this._contactList.filter(contact => contact.name === input)
        }
        else if (typeof input === 'number') {
            return this._contactList.find(contact => contact.id === input)
        }
    }

    remove(id: number): Contact | undefined {
        const currentContact: Contact | undefined = this._contactList.find(contact => contact.id === id)
        if (currentContact) {
            this._contactList = this._contactList.filter(contact => contact.id !== id)
        }
        return currentContact
    }

    next(): { done: boolean, value: Contact } | { done: boolean } {
        if (this.index < this._contactList.length) {
            return {
                done: false,
                value: this._contactList[this.index++]
            }
        }
        return { done: true }
    }
    [Symbol.iterator](): any {
        this._contactList = this._contactList.sort((a, b) => {
            if (a._name > b._name) {
                return 1
            } else if (a._name < b._name) {
                return -1
            }
            else { return -1 }
        })
        return this
    }

}

export function createPhonebook(): IPhonebook {
    return new Phonebook([])
}
