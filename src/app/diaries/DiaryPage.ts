import { Category } from "../Category";

export class DiaryPage {
    constructor (
        public entryId: number,
        public categories: Category[],
        public id: number,
        public text: string,
        public recordedDay: Date
    ) { }
}