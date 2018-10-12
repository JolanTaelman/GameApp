
export class Dungeon {

    private _id: number;
    private _name: String;
    private _length: number;
    private _loot: String[];
    
    constructor(name: String, length: number, loot: String[]) {
        this._name = name;
        this._length = length;
        this._loot = loot;
    }

    get length(): number{
        return this._length;
    }
    
    get loot(): String[]{
        return this._loot;
    }

    addLoot(loot: String){
        this._loot.push(loot);
    }

}