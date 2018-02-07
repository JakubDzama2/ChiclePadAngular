import { Category } from "../Category";

export class Note {
    constructor (
        public entryId: number,
        public categories: Category[],
        public id: number,
        public content: string,
        public reminderTime: Date,
    ) {  }
}