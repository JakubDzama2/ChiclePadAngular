export class Goal {
    constructor (
        public entryId: number,
        public categories: any[],
        public id: number,
        public description: string,
        public completedGoals: any[]
    ) { }
}