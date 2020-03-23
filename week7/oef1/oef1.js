// naam: Lene Ackermans

class Persoon{
    constructor(id, naam){
        if(typeof naam != 'string'){
            throw new Error("not a string");
        }
        if(id < 0){
            throw new Error("id less than 0");
        }
    }
}
class Manager extends Persoon{
    constructor(id, naam, ...loonwerkers){
        super(id, naam);
        this._id = id;
        this._naam = naam;
        this._loonwerkers = loonwerkers;

    }
    get id() {
        return this._id;
    }

    get naam() {
        return this._naam;
    }

    get loonwerkers() {
        return this._loonwerkers;
    }

    voegLoonWerkerToe(loonwerker = new Loonwerker(id, naam, loon, werkUren)){
        if(loonwerker instanceof Loonwerker){
            this._loonwerkers.push(loonwerker);
        }
        else{
            throw new Error('Not an instance of Loonwerker');
        }
}

    toString(){
        return `[${this._id}] ${this._naam} = ${berekenLoon(this._loonPerUur, this._aantalUrenGewerkt)}`;
    }
}
class Loonwerker extends Persoon{
    constructor(id, naam, loonPerUur, aantalUrenGewerkt){
        super(id, naam);
        if(loonPerUur < 0)
        {
            throw new Error("loonPerUur less than 0");
        }
        if(aantalUrenGewerkt < 0)
        {
            throw new Error("aantalUrenGewerkt less than 0");
        }
        this._id = id;
        this._naam = naam;
        this._loonPerUur = loonPerUur;
        this._aantalUrenGewerkt = aantalUrenGewerkt;
    }

    get id() {
        return this._id;
    }

    get naam() {
        return this._naam;
    }

    get loonPerUur() {
        return this._loonPerUur;
    }

    get aantalUrenGewerkt() {
        return this._aantalUrenGewerkt;
    }

    toString(){
        return `[${this._id}] ${this._naam} = ${berekenLoon(this._loonPerUur, this._aantalUrenGewerkt)}`;
    }
}

function berekenLoon(loonPerUur, aantalUrenGewerkt)
{
    return loonPerUur * aantalUrenGewerkt;
}

let persoon = new Persoon(1,"mieke");
let manager=new Manager(2,"jan");
let werker1=new Loonwerker(3,"tim",11,13);
let werker2=new Loonwerker(4,"sofie",2,50);
manager.voegLoonWerkerToe(werker1);
manager.voegLoonWerkerToe(werker2);
console.log(persoon.toString());
// [1] mieke 
console.log(werker1.toString());
// [3] tim = 143
console.log(werker2.toString());
// [4] sofie = 100
console.log(manager.toString());
// [2] jan = 49 

