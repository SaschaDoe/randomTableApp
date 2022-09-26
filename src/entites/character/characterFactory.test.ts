import {describe, expect, test} from "vitest";
import {CharacterFactory, createHigherPower} from "./characterFactory";
import {TableTitles} from "../../tables/tableTitles";
import {FakeRandom} from "../../utils/fakeRandom";
import {FakeTableRoller} from "../../tables/fakeTableRoller";


describe("CharacterFactory", () => {
    test("should set default character to what is given in random tables", () => {
        let tableOutput = [
            ["good"],
            ["female"],
            ["motivation"],
            ["male name"],
            ["female name"],
            ["nobel"],
            ["profession"],
            ["human"],
            ["lucky"],
            ["unlucky"],
            ["vampire"],
            ["horn"],
            ["fishing"],
            ["fireball"]];
        let tableTitle = [
            TableTitles.Alignment,
            TableTitles.Gender,
            TableTitles.Motivation,
            TableTitles.GermanMaleName,
            TableTitles.GermanFemaleNames,
            TableTitles.Nobility,
            TableTitles.Profession,
            TableTitles.Race,
            TableTitles.Advantages,
            TableTitles.Disadvantages,
            TableTitles.Curse,
            TableTitles.SpecialFeatures,
            TableTitles.Talent,
            TableTitles.MagicalTalent];
        let characterFactory = new CharacterFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1,1]))

        let character = characterFactory.create();

        expect(character.alignment).toBe("good");
        expect(character.gender).toBe("female");
        expect(character.name).toBe("female name");
        expect(character.nobility).toBe("nobel");
        expect(character.motivation).toBe("motivation");
        expect(character.profession).toBe("profession");
        expect(character.race).toBe("human");
        expect(character.homeContinent.id).toBeGreaterThan(1);

        expect(character.advantages.length).toBe(1);
        expect(character.advantages[0]).toBe("lucky");

        expect(character.disadvantages.length).toBe(1);
        expect(character.disadvantages[0]).toBe("unlucky");

        expect(character.curses.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");

        expect(character.specialFeatures.length).toBe(1);
        expect(character.specialFeatures[0]).toBe("horn");

        expect(character.talents.length).toBe(1);
        expect(character.talents[0]).toBe("fishing");

        expect(character.magicalTalents.length).toBe(1);
        expect(character.magicalTalents[0]).toBe("fireball");
    })

    test("should isHigherPower true when creating a higher power character", () => {
        let higherPower = createHigherPower();

        expect(higherPower.isHigherPower).toBe(true);
    })

    test("should three magical talents when creating a higher power character", () => {
        let higherPower = createHigherPower();

        expect(higherPower.magicalTalents.length).toBeGreaterThan(2);
    })

    let character = new CharacterFactory().create();
    let charString = character.toString();
    let highPower = createHigherPower();
})