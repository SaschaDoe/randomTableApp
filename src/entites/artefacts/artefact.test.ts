import {describe, expect, test} from "vitest";
import {ArtefactBuilder} from "./artefactBuilder";

describe("Artefacts", () => {
    test("should set artefacts attributes according to builder", () => {
        let artefactBuilder = new ArtefactBuilder()
            .withRarity("common")
            .withMagicTalents(["fireball"])
            .withQuality("broken")
            .withName("name")

        let artefact = artefactBuilder.build();

        expect(artefact.rarity).toBe("common");
        expect(artefact.quality).toBe("broken");
        expect(artefact.name).toBe("name");

        expect(artefact.magicTalents.length).toBe(1);
    })

})