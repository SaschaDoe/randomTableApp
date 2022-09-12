import type {AnimalTable} from "./charTables/animalTable";
import type {Table} from "./table";

export class TableEntry{
    minRole: number;
    maxRole: number;
    text: string;
    cascadingRoles = [] as Table[];

    constructor(text: string = "-", singleRoleValue: number = 0){
        if(singleRoleValue == 0){
            this.minRole = 1;
            this.maxRole = 6;
        }else{
            this.minRole = singleRoleValue;
            this.maxRole = singleRoleValue;
        }
        this.text = text;
    }

    withRoleInterval(minRole : number, maxRole : number){
        if(minRole > maxRole){
            throw new RangeError("Max should be equal or bigger than min");
        }
        
        this.minRole = minRole;
        this.maxRole = maxRole;

        return this;
    }

    toString(){
        if(this.minRole == this.maxRole){
            return `${this.minRole}`;
        }
        return `${this.minRole}-${this.maxRole}`;
    }

    withCascadingRole(table: Table) {
        this.cascadingRoles.push(table)
        return this;
    }
}