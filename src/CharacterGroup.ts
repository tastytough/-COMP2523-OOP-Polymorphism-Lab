export class CharacterGroup {
    data!: string;

    constructor(data: string) {
        this.data = this.data;
    }

    get length() {
        let strLength = this.data.length;
        return strLength;
    }

    compare(leftPos: number, rightPos: number): boolean {
        return this.data.charCodeAt(leftPos) > this.data.charCodeAt(rightPos)
    }
    swap(leftPos: number, rightPos: number): void {
        let stringArray = this.data.split("");

        let charLeft = stringArray[leftPos];
        let charRight = stringArray[rightPos];

        let temp = charLeft;
        charLeft = charRight;
        charRight = temp;

        this.data = stringArray.join("");
    }
}

