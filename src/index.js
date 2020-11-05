import './styles/app.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import Checklist from './js/Checklist';
import Ghost from './js/Ghost';
import evidence from "./js/Evidence";

let props = {
    evidence: evidence
}
let app = new Checklist(props);

// Let's get some ghosts
app.addGhost(new Ghost("Banshee", [evidence.EMF, evidence.FINGERPRINTS, evidence.FREEZING], "Only targets one player at a time", "Hates the Crucifix"));
app.addGhost(new Ghost("Demon", [evidence.FREEZING, evidence.WRITING, evidence.BOX], "Extremely aggressive with attacks", "Using the Ouija board to ask questions doesn't drain sanity"));
app.addGhost(new Ghost("Jinn", [evidence.EMF, evidence.ORB, evidence.BOX], "The Jinn moves faster the further away you are from it", "Cutting off the location’s power supply will limit the Jinn’s speed"));
app.addGhost(new Ghost("Mare", [evidence.FREEZING, evidence.ORB, evidence.BOX], "Attacks more frequently in the dark, tends to switch off lights", "Keeping the lights on"));
app.addGhost(new Ghost("Oni", [evidence.EMF, evidence.WRITING, evidence.BOX], "Extremely active and moves objects quickly", "Extreme activity with lots of players nearby makes it easy to identify"));
app.addGhost(new Ghost("Phantom", [evidence.EMF, evidence.ORB, evidence.FREEZING], "Looking at the Phantom will reduce your sanity", "Scared of photos, capturing a photo will cause it to disappear, though not during a hunt"));
app.addGhost(new Ghost("Poltergeist", [evidence.FINGERPRINTS, evidence.ORB, evidence.BOX], "Throws multiple objects about at once", "Rooms without any stuff in to throw"));
app.addGhost(new Ghost("Revenant", [evidence.EMF, evidence.FINGERPRINTS, evidence.WRITING], "Attacks anyone, regardless of sanity levels", "Moves extremely slowly when players hide"));
app.addGhost(new Ghost("Shade", [evidence.EMF, evidence.ORB, evidence.WRITING], "Extremely shy, making it hard to find and detect", "Won’t hunt if players are in a group"));
app.addGhost(new Ghost("Spirit", [evidence.FINGERPRINTS, evidence.WRITING, evidence.BOX], "A basic ghost with no strengths", "Using smudge sticks stops hunts for a long time"));
app.addGhost(new Ghost("Wraith", [evidence.FINGERPRINTS, evidence.FREEZING, evidence.BOX], "One of the most dangerous ghosts. Can fly through walls and doesn't leave footprints", "Has a strong reaction to salt"));
app.addGhost(new Ghost("Yurei", [evidence.FREEZING, evidence.ORB, evidence.WRITING], "Drains player sanity especially quickly", "Using a smudge stick in the same room will stop the Yurei from moving"));

app.init();
