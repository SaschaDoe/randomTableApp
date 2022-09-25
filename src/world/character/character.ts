import {AttributeEntity} from "./attributeEntity";
import type {CharacterBuilder} from "./characterBuilder";
import type {Equatable} from "../../utils/equatable";
import {artefactArrayEquals, stringArrayEquals} from "../../utils/equatable";
import type {Artefact} from "../artefacts/artefact";
import type {Site} from "../site/site";
import type {Relationship} from "./relationship";
import {isMagicalProfession} from "../../tables/charTables/magicUserProfessions";


export class Character extends AttributeEntity implements Equatable<Character>{
    readonly alignment: string;
    readonly gender: string;
    readonly name: string;
    readonly nobility: string;
    readonly motivation: string;
    readonly profession: string;
    readonly race : string;

    readonly advantages: string[];
    readonly disadvantages : string[];
    readonly curses: string[];
    readonly specialFeatures: string[];
    readonly talents: string[];
    readonly magicalTalents: string[];
    readonly artefacts: Artefact[];

    readonly homeContinent: Site;

    readonly relationships: Relationship[];
    readonly isHigherPower: boolean;


    constructor(
        characterBuilder: CharacterBuilder
    ) {
        if(characterBuilder.charGender === undefined){
            throw Error("Character gender must be set");
        }
        let gender = characterBuilder.charGender;

        if(characterBuilder.charName === undefined){
            throw Error("Character name must be set");
        }
        let name = characterBuilder.charName;

        super(name);

        this.gender = gender;
        this.name = name;

        if(characterBuilder.charAlignment === undefined){
            throw Error("Character alignment must be set");
        }
        this.alignment = characterBuilder.charAlignment;

        if(characterBuilder.charMotivation === undefined){
            throw Error("Character motivation must be set");
        }
        this.motivation = characterBuilder.charMotivation;

        if(characterBuilder.charNobility === undefined){
            throw Error("Character nobility must be set");
        }
        this.nobility = characterBuilder.charNobility;

        if(characterBuilder.charProfession === undefined){
            throw Error("Character profession must be set");
        }
        this.profession = characterBuilder.charProfession;

        if(characterBuilder.charRace === undefined){
            throw Error("Character race must be set");
        }
        this.race = characterBuilder.charRace;

        if(characterBuilder.charContinent === undefined){
            throw Error("Character home continent must be set");
        }
        this.homeContinent = characterBuilder.charContinent;

        if(characterBuilder.charHigherPower === undefined){
            throw Error("Character isHigherPower must be set");
        }
        this.isHigherPower = characterBuilder.charHigherPower;

        this.curses = characterBuilder.charCurses;
        this.specialFeatures = characterBuilder.charSpecialFeatures;
        this.advantages = characterBuilder.charAdvantages;
        this.disadvantages = characterBuilder.charDisadvantages;
        this.talents = characterBuilder.charTalents;
        this.magicalTalents = characterBuilder.charMagicalTalents
        this.artefacts = characterBuilder.charArtefacts;

        this.relationships = [];

        this.ensureMagicalUserHasMagicalTalent();
        this.ensureHigherPowerHasMinThreeMagicalTalent();
    }

    private ensureMagicalUserHasMagicalTalent() {
        if(isMagicalProfession(this.profession) && this.magicalTalents.length < 1){
            throw Error(`Profession ${this.profession} needs at least one magical power`);
        }
    }

    private ensureHigherPowerHasMinThreeMagicalTalent() {
        if(isMagicalProfession(this.profession) && this.magicalTalents.length < 3){
            throw Error(`Profession ${this.profession} needs at least one magical power`);
        }
    }

    isEqualTo(other: Character){
        return (this.alignment === other.alignment &&
            stringArrayEquals(this.advantages, other.advantages) &&
            stringArrayEquals(this.curses, other.curses) &&
            this.gender === other.gender &&
            this.name === other.name &&
            this.nobility === other.nobility &&
            this.motivation === other.motivation &&
            this.profession === other.profession &&
            this.race === other.race &&
            this.homeContinent === other.homeContinent &&
            stringArrayEquals(this.talents, other.talents) &&
            artefactArrayEquals(this.artefacts, other.artefacts) &&
            stringArrayEquals(this.specialFeatures, other.specialFeatures));
    }

    toString(){
        return `${this.getUniqueName()} a ${this.alignment} ${this.nobility} ${this.gender} ${this.race} from ${this.homeContinent.getUniqueName()} with the motivation ${this.motivation}`;
    }

    /*

    getDescription(){
        let description = `${this.name} a ${this.gender} ${this.race} `
        for(let i = 0; i < this.curses.length; i++){
            description += `${this.curses[i]} `;
        }
        description += `${this.nobility} ${this.profession} with ${this.specialFeature}`;
        if(this.advantages.length > 0 || this.disadvantages.length > 0){
            description += " which is "
        }
        for(let i = 0; i < this.advantages.length; i++){
            description += `${this.advantages[i]}`;
            if(i < this.advantages.length-1){
                description += ", "
            }else{
                description += " "
            }
        }
        if(this.disadvantages.length > 0 && this.advantages.length > 0){
            description += " and is "
        }else if(this.disadvantages.length > 0){
            description += " which is "
        }
        for(let i = 0; i < this.advantages.length; i++){
            description += `${this.advantages[i]}`;
            if(i < this.advantages.length-1){
                description += ", "
            }else{
                description += " "
            }
        }
        return description;
    }
    */



}

