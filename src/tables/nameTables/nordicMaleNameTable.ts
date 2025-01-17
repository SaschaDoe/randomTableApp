import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class NordicMaleNameTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("Agdan"))
        entries.push(new TableEntry("Aki"))
        entries.push(new TableEntry("Ansgar"))
        entries.push(new TableEntry("Ansir"))
        entries.push(new TableEntry("Arngrimm"))
        entries.push(new TableEntry("Arvid"))
        entries.push(new TableEntry("Asgrimm"))
        entries.push(new TableEntry("Askir"))
        entries.push(new TableEntry("Asleif"))
        entries.push(new TableEntry("Asleff"))
        entries.push(new TableEntry("Atli"))
        entries.push(new TableEntry("Atmaskott"))
        entries.push(new TableEntry("Beorn"))
        entries.push(new TableEntry("Bjarni"))
        entries.push(new TableEntry("Bjeri"))
        entries.push(new TableEntry("Bjorne"))
        entries.push(new TableEntry("Brand"))
        entries.push(new TableEntry("Brynar"))
        entries.push(new TableEntry("Dongrimm"))
        entries.push(new TableEntry("Egil"))
        entries.push(new TableEntry("Eindrick"))
        entries.push(new TableEntry("Erick"))
        entries.push(new TableEntry("Eldgrimm"))
        entries.push(new TableEntry("Faenwulf"))
        entries.push(new TableEntry("Fjolnir"))
        entries.push(new TableEntry("Fjonn"))
        entries.push(new TableEntry("Frenjar"))
        entries.push(new TableEntry("Frodi"))
        entries.push(new TableEntry("Garald"))
        entries.push(new TableEntry("Garulf"))
        entries.push(new TableEntry("Geir"))
        entries.push(new TableEntry("Gerskir"))
        entries.push(new TableEntry("Gunni"))
        entries.push(new TableEntry("Hakon"))
        entries.push(new TableEntry("Halfdan"))
        entries.push(new TableEntry("Hallar"))
        entries.push(new TableEntry("Hardger"))
        entries.push(new TableEntry("Hardred"))
        entries.push(new TableEntry("Hasgar"))
        entries.push(new TableEntry("Helgir"))
        entries.push(new TableEntry("Herleif"))
        entries.push(new TableEntry("Hjerolf"))
        entries.push(new TableEntry("Hjaldall"))
        entries.push(new TableEntry("Hjalmar"))
        entries.push(new TableEntry("Hjaldar"))
        entries.push(new TableEntry("Hjelm"))
        entries.push(new TableEntry("Hjolde"))
        entries.push(new TableEntry("Ingald"))
        entries.push(new TableEntry("Ingirid"))
        entries.push(new TableEntry("Ingibörg"))
        entries.push(new TableEntry("Iskir"))
        entries.push(new TableEntry("Isleif"))
        entries.push(new TableEntry("Joran"))
        entries.push(new TableEntry("Jurge"))
        entries.push(new TableEntry("Kari"))
        entries.push(new TableEntry("Ketil"))
        entries.push(new TableEntry("Norri"))
        entries.push(new TableEntry("Schnorri"))
        entries.push(new TableEntry("Olav"))
        entries.push(new TableEntry("Olgard"))
        entries.push(new TableEntry("Olgi"))
        entries.push(new TableEntry("Olvir"))
        entries.push(new TableEntry("Orgen"))
        entries.push(new TableEntry("Orm"))
        entries.push(new TableEntry("Orozar"))
        entries.push(new TableEntry("Ragnar"))
        entries.push(new TableEntry("Raskir"))
        entries.push(new TableEntry("Rekki"))
        entries.push(new TableEntry("Rodi"))
        entries.push(new TableEntry("Röngvald"))
        entries.push(new TableEntry("Rorleif"))
        entries.push(new TableEntry("Runolf"))
        entries.push(new TableEntry("Sigridur"))
        entries.push(new TableEntry("Sigrud"))
        entries.push(new TableEntry("Solvi"))
        entries.push(new TableEntry("Starkad"))
        entries.push(new TableEntry("Steinar"))
        entries.push(new TableEntry("Stirbjörn"))
        entries.push(new TableEntry("Sven"))
        entries.push(new TableEntry("Swafgard"))
        entries.push(new TableEntry("Swafleif"))
        entries.push(new TableEntry("Swafnan"))
        entries.push(new TableEntry("Tevil"))
        entries.push(new TableEntry("Thinmar"))
        entries.push(new TableEntry("Thivar"))
        entries.push(new TableEntry("Thorgrimm"))
        entries.push(new TableEntry("Thorgun"))
        entries.push(new TableEntry("Thorkar"))
        entries.push(new TableEntry("Thorn"))
        entries.push(new TableEntry("Thorwulf"))
        entries.push(new TableEntry("Thurbold"))
        entries.push(new TableEntry("Thure"))
        entries.push(new TableEntry("Tjalf"))
        entries.push(new TableEntry("Torben"))
        entries.push(new TableEntry("Torbrand"))
        entries.push(new TableEntry("Tore"))
        entries.push(new TableEntry("Torfin"))
        entries.push(new TableEntry("Torgal"))
        entries.push(new TableEntry("Torkil"))
        entries.push(new TableEntry("Torlif"))
        entries.push(new TableEntry("Torstor"))
        entries.push(new TableEntry("Trollwulf"))
        entries.push(new TableEntry("Tronde"))
        entries.push(new TableEntry("Vandrad"))
        entries.push(new TableEntry("Walkir"))
        entries.push(new TableEntry("Wulfgrimm"))
        entries.push(new TableEntry("Yngvar"))
        super(entries, TableTitles.NordicMaleName);
        this.tableType = TableType.Other;
    }
}