import React, {Component} from 'react';
import './App.sass';
import GhostCardContainer from '../GhostCardContainer/GhostCardContainer';

const evidenceList = {
    EMF: "EMF Level 5",
    FINGERPRINTS: "Fingerprints",
    FREEZING: "Freezing Temperatures",
    ORB: "Ghost Orb",
    WRITING: "Ghost Writing",
    BOX: "Spirit Box"
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghosts: [
                {
                    name: "Banshee",
                    evidenceList: [evidenceList.EMF, evidenceList.FINGERPRINTS, evidenceList.FREEZING],
                    strengths: "Only targets one player at a time",
                    weaknesses: "Hates the Crucifix"
                },
                {
                    name: "Demon",
                    evidenceList: [evidenceList.FREEZING, evidenceList.WRITING, evidenceList.BOX],
                    strengths: "Extremely aggressive with attacks",
                    weaknesses: "Using the Ouija board to ask questions doesn't drain sanity"
                },
                {
                    name: "Jinn",
                    evidenceList: [evidenceList.EMF, evidenceList.ORB, evidenceList.BOX],
                    strengths: "The Jinn moves faster the further away you are from it",
                    weaknesses: "Cutting off the location’s power supply will limit the Jinn’s speed"
                },
                {
                    name: "Mare",
                    evidenceList: [evidenceList.FREEZING, evidenceList.ORB, evidenceList.BOX],
                    strengths: "Attacks more frequently in the dark, tends to switch off lights",
                    weaknesses: "Keeping the lights on"
                },
                {
                    name: "Oni",
                    evidenceList: [evidenceList.EMF, evidenceList.WRITING, evidenceList.BOX],
                    strengths: "Extremely active and moves objects quickly",
                    weaknesses: "Extreme activity with lots of players nearby makes it easy to identify"
                },
                {
                    name: "Phantom",
                    evidenceList: [evidenceList.EMF, evidenceList.ORB, evidenceList.FREEZING],
                    strengths: "Looking at the Phantom will reduce your sanity",
                    weaknesses: "Scared of photos, capturing a photo will cause it to disappear, though not during a hunt"
                },
                {
                    name: "Poltergeist", evidenceList: [evidenceList.FINGERPRINTS, evidenceList.ORB, evidenceList.BOX],
                    strengths: "Throws multiple objects about at once",
                    weaknesses: "Rooms without any stuff in to throw"
                },
                {
                    name: "Revenant",
                    evidenceList: [evidenceList.EMF, evidenceList.FINGERPRINTS, evidenceList.WRITING],
                    strengths: "Attacks anyone, regardless of sanity levels",
                    weaknesses: "Moves extremely slowly when players hide"
                },
                {
                    name: "Shade",
                    evidenceList: [evidenceList.EMF, evidenceList.ORB, evidenceList.WRITING],
                    strengths: "Extremely shy, making it hard to find and detect",
                    weaknesses: "Won’t hunt if players are in a group"
                },
                {
                    name: "Spirit",
                    evidenceList: [evidenceList.FINGERPRINTS, evidenceList.WRITING, evidenceList.BOX],
                    strengths: "A basic ghost with no strengths",
                    weaknesses: "Using smudge sticks stops hunts for a long time"
                },
                {
                    name: "Wraith",
                    evidenceList: [evidenceList.FINGERPRINTS, evidenceList.FREEZING, evidenceList.BOX],
                    strengths: "One of the most dangerous ghosts. Can fly through walls and doesn't leave footprints",
                    weaknesses: "Has a strong reaction to salt"
                },
                {
                    name: "Yurei",
                    evidenceList: [evidenceList.FREEZING, evidenceList.ORB, evidenceList.WRITING],
                    strengths: "Drains player sanity especially quickly",
                    weaknesses: "Using a smudge stick in the same room will stop the Yurei from moving"
                }

            ]
        }
        ;

    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                {
                    this.state.ghosts.map((ghost, index) => (
                            <GhostCardContainer key={index} ghost={ghost}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default App;