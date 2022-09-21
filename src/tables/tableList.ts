import {RaceTable} from "./charTables/raceTable";
import {GenderTable} from "./charTables/genderTable";
import {AnimalTable} from "./charTables/animalTable";
import {FantasyCreatureTable} from "./charTables/fantasyCreatureTable";
import {NobilityTable} from "./charTables/nobilityTable";
import {AlignmentTable} from "./charTables/alignmentTable";
import {AttitudeTable} from "./charTables/attitudeTable";
import {AdvantageTable} from "./charTables/advantageTable";
import {DisadvantageTable} from "./charTables/disadvantageTable";
import {CurseTable} from "./charTables/curseTable";
import {ProfessionTable} from "./charTables/professionTable";
import {MotivationTable} from "./charTables/motivationTable";
import {GermanMaleNameTable} from "./nameTables/germanMaleNameTable";
import {GermanFemaleNameTable} from "./nameTables/germanFemaleNameTable";
import {RelationshipTypeTable} from "./charTables/relationshipTypeTable";
import {ContinentTable} from "./locationTables/continentTable";
import {SphereTable} from "./locationTables/sphereTable";
import {WeaponTable} from "./artefactTables/weaponTable";
import {ArmorTable} from "./artefactTables/armorTable";
import {JewelryTable} from "./artefactTables/jewelryTable";
import {GemstoneTable} from "./artefactTables/gemstoneTable";
import {MaterialsTable} from "./artefactTables/materialsTable";
import {AttributeTable} from "./charTables/attributeTable";
import {SenseTable} from "./otherTables/senseTable";
import {SizeTable} from "./otherTables/sizeTable";
import {LocationTable} from "./otherTables/locationTable";
import {WeatherAdjectiveTable} from "./otherTables/weatherAdjectiveTable";
import {VocalTable} from "./otherTables/vocalTable";
import {RarityTable} from "./otherTables/rarityTable";
import {QualityTable} from "./otherTables/qualityTable";
import {BodyPartsTable} from "./otherTables/bodyPartsTable";
import {ElementTable} from "./otherTables/elementTable";
import {StructureTable} from "./locationTables/structureTable";
import {BuildingTable} from "./locationTables/buildingTable";
import {BuildingAdjectiveTable} from "./locationTables/buildingAdjectiveTable";
import {DungeonEntriesTable} from "./locationTables/dungeonEntriesTable";
import {DungeonNameTable} from "./nameTables/dungeonNameTable";
import {EpicSubstantiveTable} from "./nameTables/epicSubstantiveTable";
import {TalentTable} from "./talentTables/talentTable";
import {TalentCategoryTable} from "./talentTables/talentCategoryTable";
import {ElementalTalentTable} from "./talentTables/elementalTalentTable";
import {FromAnotherHigherPowerTalent} from "./talentTables/fromAnotherHigherPowerTalent";
import {TargetTalentTable} from "./talentTables/targetTalentTable";
import {ChangeTalentTable} from "./talentTables/changeTalentTable";
import {ArtefactTable} from "./artefactTables/artefactTable";
import {MagicalTalentTable} from "./talentTables/magicalTalentTable";
import {MagicalArtefactTable} from "./artefactTables/magicalArtefactTable";
import {SummonTalentTable} from "./talentTables/summonTalentTable";
import {MetaMagicTalentTable} from "./talentTables/metaMagicTalentTable";
import {ProphecyTalentTable} from "./talentTables/prophecyTalentTable";
import {LimitationTable} from "./talentTables/limitationTable";
import {EmotionTable} from "./otherTables/emotionTable";
import {PsyTalentTable} from "./talentTables/psyTalentTable";
import {HealingTalentTable} from "./talentTables/healingTalentTable";
import {ObjectEnchantmentTable} from "./talentTables/objectEnchantmentTable";
import {ArtefactAdjectiveTable} from "./artefactTables/artefactAdjectiveTable";
import {TreasureTable} from "./artefactTables/treasureTable";
import {FurnishingTable} from "./locationTables/furnishingTable";
import {WeatherTable} from "./otherTables/weatherTable";
import {ObstacleTable} from "./locationTables/obstacleTable";
import {TrapTriggerTable} from "./locationTables/trapTriggerTable";
import {NaturalObstacleTable} from "./locationTables/naturalObstacleTable";
import {TrapFunctionTable} from "./locationTables/trapFunctionTable";
import {TrapTable} from "./locationTables/trapTable";
import {MonsterAdjectiveTable} from "./monsterTables/monsterAdjectiveTable";
import {MonsterNumberTable} from "./monsterTables/monsterNumberTable";
import {MonsterReproductionTable} from "./monsterTables/monsterReproductionTable";
import {MonsterMealTable} from "./monsterTables/monsterMealTable";
import {MonsterEncounterTypeTable} from "./monsterTables/monsterEncounterTypeTable";
import {SpecialFeaturesTable} from "./charTables/specialFeaturesTable";
import {MonsterTable} from "./monsterTables/monsterTable";
import {NaturalEvents} from "./otherTables/naturalEvents";
import {TownEventTable} from "./townTables/townEventTable";
import {TimeTalentTable} from "./talentTables/timeTalentTable";
import {TravelTalentTable} from "./talentTables/travelTalentTable";

export let charTables = [
    new RaceTable(),
    new GenderTable(),
    new AnimalTable(),
    new FantasyCreatureTable(),
    new NobilityTable(),
    new AlignmentTable(),
    new AttitudeTable(),
    new AdvantageTable(),
    new DisadvantageTable(),
    new CurseTable(),
    new ProfessionTable(),
    new MotivationTable(),
    new RelationshipTypeTable(),
    new SpecialFeaturesTable(),
];
export let monsterTables = [
    new MonsterAdjectiveTable(),
    new MonsterNumberTable(),
    new MonsterReproductionTable(),
    new MonsterMealTable(),
    new MonsterEncounterTypeTable(),
    new MonsterTable(),
]
export let talentTables = [
    new TalentTable(),
    new MagicalTalentTable(),
    new TalentCategoryTable(),
    new TargetTalentTable(),
    new ElementalTalentTable(),
    new FromAnotherHigherPowerTalent(),
    new ChangeTalentTable(),
    new SummonTalentTable(),
    new MetaMagicTalentTable(),
    new ProphecyTalentTable(),
    new LimitationTable(),
    new PsyTalentTable(),
    new HealingTalentTable(),
    new ObjectEnchantmentTable(),
    new TimeTalentTable(),
    new TravelTalentTable(),
]
export let locationTables = [
    new ContinentTable(),
    new SphereTable(),
    new StructureTable(),
    new DungeonEntriesTable(),
    new BuildingTable(),
    new BuildingAdjectiveTable(),
    new FurnishingTable(),
    new ObstacleTable(),
    new TrapTriggerTable(),
    new NaturalObstacleTable(),
    new TrapFunctionTable(),
    new TrapTable(),
]
export let townTables = [
    new TownEventTable(),
]
export let artefactsTables = [
    new ArtefactTable(),
    new ArtefactAdjectiveTable(),
    new MagicalArtefactTable(),
    new TreasureTable(),
    new WeaponTable(),
    new ArmorTable(),
    new JewelryTable(),
    new GemstoneTable(),
    new MaterialsTable(),

]
export let nameTables = [
    new DungeonNameTable(),
    new EpicSubstantiveTable(),
    new GermanFemaleNameTable(),
    new GermanMaleNameTable(),
]
export let otherTables = [
    new AttributeTable(),
    new SenseTable(),
    new SizeTable(),
    new LocationTable(),
    new WeatherTable(),
    new WeatherAdjectiveTable(),
    new VocalTable(),
    new RarityTable(),
    new QualityTable(),
    new BodyPartsTable(),
    new ElementTable(),
    new EmotionTable(),
    new NaturalEvents(),
]

export let allTables = charTables
    .concat(monsterTables)
    .concat(talentTables)
    .concat(locationTables)
    .concat(townTables)
    .concat(artefactsTables)
    .concat(nameTables)
    .concat(otherTables);