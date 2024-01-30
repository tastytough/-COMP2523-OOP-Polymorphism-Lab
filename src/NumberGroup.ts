import { ISortable } from "./interfaces";

export class NumberGroup implements ISortable {
    data!: number[]

    constructor(data: number[]){
        this.data = this.data
    }
    get length(): number {
        return this.data.length;
    }

    compare(leftPos: number, rightPos: number): boolean {
        const leftNumber = this.data[leftPos];
        const rightNumber = this.data[rightPos];
        return leftNumber > rightNumber;

    }
    swap(leftPos: number, rightPos: number): void {
        const tempLeft = this.data[leftPos];
        const tempRight = this.data[rightPos];
        if(this.compare(leftPos, rightPos)) {
            this.data[leftPos] = tempRight;
            this.data[rightPos] = tempLeft
        }
    }
}
