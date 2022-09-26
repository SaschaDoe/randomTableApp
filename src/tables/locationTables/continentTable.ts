import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {SizeTable} from "../otherTables/sizeTable";
import {LocationTable} from "../otherTables/locationTable";
import {WeatherAdjectiveTable} from "../otherTables/weatherAdjectiveTable";
import {TableType} from "../tableType";
import type {Site} from "../../entites/site/site";
import type {RoleResult} from "../roleResult";

export class ContinentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("continent that is ")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new LocationTable())
            .withCascadingRole(new WeatherAdjectiveTable()));
        entries.push(new TableEntry("continent that is ")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new LocationTable()));
        super(entries, TableTitles.Continent);
        this.functions.push(changeDescription)
        this.tableType = TableType.Location;
    }
}

export function changeDescription(location: Site, roleResult: RoleResult){
    location.description = roleResult.text;
    return location;
}