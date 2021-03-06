import { Category } from "../Category";

export class Goal {
    constructor (
        public entryId: number,
        public categories: Category[],
        public id: number,
        public description: string,
        public completedGoals: any[]
    ) { }
}