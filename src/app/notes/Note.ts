export class Note {
    constructor (
        public entryId: number,
        public categories: any[],
        public id: number,
        public content: string,
        public reminderTime: {}
    ) { }
}