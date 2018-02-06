export class DiaryPage {
    constructor (
        public entryId: number,
        public categories: any[],
        public id: number,
        public text: string,
        public recordedDay: Date
    ) { }
}