import { Category } from "../Category";

export class Todo {
    constructor (
        public entryId: number,
        public categories: Category[],
        public id: number,
        public description: string,
        public deadline: {},
        public softDeadline: {},
        public priority: number
    ) { }

    getColor() {
        
    }
}