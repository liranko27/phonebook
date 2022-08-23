import { Contact } from "./Contact";
import { IPhonebook } from "./IPhonebook";
import { createPhonebook } from "./Phonebook";

const phoneBook1: IPhonebook = createPhonebook()


phoneBook1.add(new Contact(12, 'Liran', 'Yonatan ratush 15', ['058545646']))
// phoneBook1.add(new Contact(13, 'Moshe', 'Hedera 12', ['054654651']))
// console.log(phoneBook1.size())

// phoneBook1.addPhone(12, '039244816')
// console.log(phoneBook1.get('Liran')) //2 contacts 
// phoneBook1.remove(12)
// console.log(phoneBook1.get('Liran'))//1 contact 
// console.log(phoneBook1.size())

// for (const contact of phoneBook1) {
//     console.log(contact)
// }

//Alphabetic sort 
for (const contact of phoneBook1) {
    console.log(contact)
}


//Get all by name 
for (const contact of [phoneBook1.get('Liran')]) {
    console.log(contact)
}