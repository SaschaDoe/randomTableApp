import type {Dice} from "../../utils/dice";
import {Site} from "./site";
import {continentStore, sphereStore} from "./siteStore";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {SphereTable} from "../../tables/locationTables/sphereTable";

export function mapSiteWithChar(dice: Dice) {
    let continent = createContinent();
    let randomNumber = dice.getRandomInt(0, 10);
    let numberOfSites = 0
    continentStore.subscribe(sites => {
        numberOfSites = sites.length
    })

    if (randomNumber === 1 || numberOfSites === 0) {
        continentStore.update((s) => {
            s.push(continent);
            return s;
        });
    } else {
        let randomContinentIndex = dice.getRandomInt(0, numberOfSites-1);
        continentStore.subscribe(sites => {
            continent = sites[randomContinentIndex]
        })
    }
    return continent;
}

export function createContinent(){
    let continent = new Site();
    continent.localSpheres = generateSpheres();
    return continent;
}

function generateSpheres() {
    let spheres = [];
    let numberOfSpheres = randomIntFromInterval(0, 6);
    for (let i = 0; i < numberOfSpheres; i++) {
        let sphere = new Site(true);
        sphereStore.update((spheres) => {
            spheres.push(sphere);
            return spheres;
        })
        sphere.description = new SphereTable().roleWithCascade().text;
        spheres.push(sphere);
    }


    return spheres;
}