export class CharacterGroup {
    data!: string;

    constructor(data: string) {
        this.data = this.data;
    }

    get length() {
        let strLength = this.data.length;
        return strLength;
    }
}

// Creating an instance of the class
const myCharacterGroup = new CharacterGroup("ABC");


// Accessing the 'length' property using the getter
console.log(myCharacterGroup.length);
