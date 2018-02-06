export class User {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public entries: any[] = [],
        public name: string = '',
        public locale: string = ''
    ) { }
    
}