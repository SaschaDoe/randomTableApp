import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";

export class SizeTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("huge"))
        entries.push(new TableEntry("big"))
        entries.push(new TableEntry("normal"))
        entries.push(new TableEntry("small"))
        entries.push(new TableEntry("tiny"))
        super(entries, TableTitles.Size);
    }
}