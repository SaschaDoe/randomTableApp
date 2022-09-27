import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {createHigherPowerReturnUniqueName} from "../../entites/character/charStore";
import {addArtefactToStoreReturnUniqueName} from "../../entites/artefacts/artefactStore";


export class FromAnotherHigherPowerTalent extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("pact with").withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("ground of").withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("summoning helpers of").withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("summoning")
            .withFunctionString(addArtefactToStoreReturnUniqueName)
            .with(" of ")
            .withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("dialogue with").withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("transport to domain of").withFunctionString(createHigherPowerReturnUniqueName))
        entries.push(new TableEntry("protection against").withFunctionString(createHigherPowerReturnUniqueName))
        super(entries, TableTitles.TalentFromHigherPower);
        this.tableType = TableType.Talent;
    }
}