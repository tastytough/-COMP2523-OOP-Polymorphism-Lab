import { ISortable } from "./ISortable";


class SortUtil {
    collection: ISortable
    constructor(collection: ISortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;
        let isSorted = false;
        let lastUnsorted = length - 1;
        while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
            if(this.collection.compare(i, i + 1)) {
                this.collection.swap(i, i + 1)
                isSorted = false;
            }
            lastUnsorted--;
        }
        }
    }
}
