import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class RussianLastNameTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("Alatzer"))
        entries.push(new TableEntry("Alwinnen"))
        entries.push(new TableEntry("Arauken"))
        entries.push(new TableEntry("Eornski"))
        entries.push(new TableEntry("Brinnske"))
        entries.push(new TableEntry("Dappersjen"))
        entries.push(new TableEntry("Dobelsten"))
        entries.push(new TableEntry("Donsenkin"))
        entries.push(new TableEntry("Drulgosch"))
        entries.push(new TableEntry("Ebersen"))
        entries.push(new TableEntry("Elkinnen"))
        entries.push(new TableEntry("Elkensen"))
        entries.push(new TableEntry("Firunkis"))
        entries.push(new TableEntry("Gertimpski"))
        entries.push(new TableEntry("Gerbensen"))
        entries.push(new TableEntry("Hinske"))
        entries.push(new TableEntry("Hollerow"))
        entries.push(new TableEntry("Ilmensen"))
        entries.push(new TableEntry("Ilumka"))
        entries.push(new TableEntry("Jannikinna"))
        entries.push(new TableEntry("Juchski"))
        entries.push(new TableEntry("Karenkis"))
        entries.push(new TableEntry("Karjensen"))
        entries.push(new TableEntry("Kruschin"))
        entries.push(new TableEntry("Laikis"))
        entries.push(new TableEntry("Larinow"))
        entries.push(new TableEntry("Luminoff"))
        entries.push(new TableEntry("Meskinske"))
        entries.push(new TableEntry("Peddersen"))
        entries.push(new TableEntry("Peddersjepsen"))
        entries.push(new TableEntry("Perschoff"))
        entries.push(new TableEntry("Puschinske"))
        entries.push(new TableEntry("Puspersen"))
        entries.push(new TableEntry("Rodensen"))
        entries.push(new TableEntry("Rudersow"))
        entries.push(new TableEntry("Salderken"))
        entries.push(new TableEntry("Schorken"))
        entries.push(new TableEntry("Sewerksi"))
        entries.push(new TableEntry("Surjeloff"))
        entries.push(new TableEntry("Siveling"))
        entries.push(new TableEntry("Sjepensen"))
        entries.push(new TableEntry("Stipkow"))
        entries.push(new TableEntry("Sörebrandt"))
        entries.push(new TableEntry("Timpski"))
        entries.push(new TableEntry("Tuljow"))
        entries.push(new TableEntry("Turjeleff"))
        entries.push(new TableEntry("Ulmensen"))
        entries.push(new TableEntry("Ulmski"))
        entries.push(new TableEntry("Walroder"))
        entries.push(new TableEntry("Wasareff"))
        entries.push(new TableEntry("Walsjakow"))
        entries.push(new TableEntry("Wolpjes"))
        entries.push(new TableEntry("Wulfski"))
        super(entries, TableTitles.RussianLastName);
        this.tableType = TableType.Other;
    }
}