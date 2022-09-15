import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {changeRace} from "./raceTable";

export class AnimalTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry("goat"));
        entries.push(new TableEntry("armadillo"));
        entries.push(new TableEntry("buffalo"));
        entries.push(new TableEntry("capybara"));
        entries.push(new TableEntry("badger"));
        entries.push(new TableEntry("elephant"));
        entries.push(new TableEntry("earth piglet"));
        entries.push(new TableEntry("spot musang"));
        entries.push(new TableEntry("ferret"));
        entries.push(new TableEntry("gorilla"));
        entries.push(new TableEntry("hamster"));
        entries.push(new TableEntry("chicken"));
        entries.push(new TableEntry("dog"));
        entries.push(new TableEntry("jaguar"));
        entries.push(new TableEntry("capuchin monkey"));
        entries.push(new TableEntry("cat"));
        entries.push(new TableEntry("coyote"));
        entries.push(new TableEntry("lama"));
        entries.push(new TableEntry("lion"));
        entries.push(new TableEntry("lux"));
        entries.push(new TableEntry("mole"));
        entries.push(new TableEntry("hippo"));
        entries.push(new TableEntry("horse"));
        entries.push(new TableEntry("rat"));
        entries.push(new TableEntry("reindeer"));
        entries.push(new TableEntry("rhino"));
        entries.push(new TableEntry("rob"));
        entries.push(new TableEntry("chimpanzee"));
        entries.push(new TableEntry("platypus"));
        entries.push(new TableEntry("skunk"));
        entries.push(new TableEntry("gibbon"));
        entries.push(new TableEntry("elk"));
        entries.push(new TableEntry("alpaca"));
        entries.push(new TableEntry("giraffe"));
        entries.push(new TableEntry("plumploris"));
        entries.push(new TableEntry("squirrel"));
        entries.push(new TableEntry("black bear"));
        entries.push(new TableEntry("dromedary"));
        entries.push(new TableEntry("dikdik"));
        entries.push(new TableEntry("fox"));
        entries.push(new TableEntry("sloth"));
        entries.push(new TableEntry("otter"));
        entries.push(new TableEntry("hyena"));
        entries.push(new TableEntry("snow goat"));
        entries.push(new TableEntry("tapir"));
        entries.push(new TableEntry("okapi"));
        entries.push(new TableEntry("leopard"));
        entries.push(new TableEntry("rabbit"));
        entries.push(new TableEntry("hedgehog"));
        entries.push(new TableEntry("orangutan"));
        entries.push(new TableEntry("kangaroo"));
        entries.push(new TableEntry("porcupine"));
        entries.push(new TableEntry("panda"));
        entries.push(new TableEntry("possum"));
        entries.push(new TableEntry("walrus"));
        entries.push(new TableEntry("hare"));
        entries.push(new TableEntry("echidna"));
        entries.push(new TableEntry("red panda"));
        entries.push(new TableEntry("pig"));
        entries.push(new TableEntry("grizzly bear"));
        entries.push(new TableEntry("wild boar"));
        entries.push(new TableEntry("see elephant"));
        entries.push(new TableEntry("sheep"));
        entries.push(new TableEntry("racoon"));
        entries.push(new TableEntry("ice bear"));

        entries.push(new TableEntry("eagle"));
        entries.push(new TableEntry("ara"));
        entries.push(new TableEntry("capercaillie"));
        entries.push(new TableEntry("blue-footed booby"));
        entries.push(new TableEntry("buzzard"));
        entries.push(new TableEntry("cardinal bird"));
        entries.push(new TableEntry("ice bird"));
        entries.push(new TableEntry("emu"));
        entries.push(new TableEntry("duck"));
        entries.push(new TableEntry("owl"));
        entries.push(new TableEntry("pheasant"));
        entries.push(new TableEntry("flamingo"));
        entries.push(new TableEntry("bat"));
        entries.push(new TableEntry("frigate bird"));
        entries.push(new TableEntry("goose"));
        entries.push(new TableEntry("uhu"));
        entries.push(new TableEntry("ibis"));
        entries.push(new TableEntry("kasuar"));
        entries.push(new TableEntry("kea"));
        entries.push(new TableEntry("hummingbird"));
        entries.push(new TableEntry("crane"));
        entries.push(new TableEntry("gull"));
        entries.push(new TableEntry("pelican"));
        entries.push(new TableEntry("peacock"));
        entries.push(new TableEntry("puffin"));
        entries.push(new TableEntry("raven"));
        entries.push(new TableEntry("screech owl"));
        entries.push(new TableEntry("swallow"));
        entries.push(new TableEntry("stork"));
        entries.push(new TableEntry("deaf"));
        entries.push(new TableEntry("toco toucan"));

        entries.push(new TableEntry("baracuda"));
        entries.push(new TableEntry("blue whale"));
        entries.push(new TableEntry("colorful fish"));
        entries.push(new TableEntry("dolphin"));
        entries.push(new TableEntry("shark"));
        entries.push(new TableEntry("hammerhead shark"));
        entries.push(new TableEntry("herring"));
        entries.push(new TableEntry("lobster"));
        entries.push(new TableEntry("coral"));
        entries.push(new TableEntry("manta ray"));
        entries.push(new TableEntry("octopus"));
        entries.push(new TableEntry("pyrania"));
        entries.push(new TableEntry("jellyfish"));
        entries.push(new TableEntry("sea urchin"));
        entries.push(new TableEntry("seahorse"));
        entries.push(new TableEntry("starfish"));

        entries.push(new TableEntry("ant"));
        entries.push(new TableEntry("anaconda"));
        entries.push(new TableEntry("axolotl"));
        entries.push(new TableEntry("tapeworm"));
        entries.push(new TableEntry("bee"));
        entries.push(new TableEntry("frog"));
        entries.push(new TableEntry("grasshopper"));
        entries.push(new TableEntry("hornet"));
        entries.push(new TableEntry("bumblebee"));
        entries.push(new TableEntry("caiman"));
        entries.push(new TableEntry("rattlesnake"));
        entries.push(new TableEntry("crab"));
        entries.push(new TableEntry("toad"));
        entries.push(new TableEntry("mamba"));
        entries.push(new TableEntry("mantis"));
        entries.push(new TableEntry("dung beetle"));
        entries.push(new TableEntry("newt"));
        entries.push(new TableEntry("moth"));
        entries.push(new TableEntry("slug"));
        entries.push(new TableEntry("rowing foot crab"));
        entries.push(new TableEntry("turtle"));
        entries.push(new TableEntry("butterfly"));
        entries.push(new TableEntry("black widow"));
        entries.push(new TableEntry("scarab"));
        entries.push(new TableEntry("scarab"));
        entries.push(new TableEntry("tarantula"));
        entries.push(new TableEntry("millipede"));
        entries.push(new TableEntry("termite"));
        entries.push(new TableEntry("waran"));
        entries.push(new TableEntry("vineyard snail"));
        entries.push(new TableEntry("wasp"));
        entries.push(new TableEntry("worm"));
        entries.push(new TableEntry("raptor"));
        entries.push(new TableEntry("long-necked dinosaur"));
        entries.push(new TableEntry("armored dinosaur"));
        entries.push(new TableEntry("horned dinosaur"));
        entries.push(new TableEntry("bacteria"));
        entries.push(new TableEntry("slime"));
        entries.push(new TableEntry("mushroom"));

        super(entries, TableTitles.Animal);
        this.functions.push(changeRace)
    }
}