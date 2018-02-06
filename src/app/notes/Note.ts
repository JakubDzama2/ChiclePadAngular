import { Category } from "../Category";

export class Note {
    constructor (
        public entryId: number,
        public categories: Category[],
        public id: number,
        public content: string,
        public reminderTime: Date,
    ) {  }
<<<<<<< HEAD

    public reminderTimeToString(): string {
        let result: string = '';
        if (this.reminderTime == null) {
            result = '';
        } else {
            result = result + this.reminderTime.getDay + '.' + this.reminderTime.getMonth + '.' +
            this.reminderTime.getFullYear + ' ' + this.reminderTime.getHours + ':' + this.reminderTime.getMinutes;
        }
        //console.log(result);
        return result;
    }
=======
    
>>>>>>> 3affc7ed849e4ae06848fa7a75f0a7798e021056
}