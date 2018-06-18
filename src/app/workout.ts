export class workout{
    title: String;
    notes: String;
    caloriesBurntPerMinute: String;
    category:String;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}