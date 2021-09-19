import { Ghost, Evidence } from './models';

export const GHOSTS: Array<Ghost> = [
    {
        name: 'Banshee',
        strength: 'Will target only player',
        weakness: 'Less aggressive when near a crucifix',
        evidence: [
            Evidence.ORB,
            Evidence.DOTS,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Demon',
        strength: 'Increased chance of attack in the dark',
        weakness: 'Turning on the lights will lower the chance of attack',
        evidence: [
            Evidence.WRITING,
            Evidence.TEMPS,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Goryo',
        strength: 'Will only be seen on camera if no one is nearby',
        weakness: 'Rarely seen far from their place of death',
        evidence: [
            Evidence.EMF,
            Evidence.DOTS,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Hantu',
        strength: 'Moves faster in lower temperatures',
        weakness: 'Moves slower in warmer temperatures',
        evidence: [
            Evidence.ORB,
            Evidence.TEMPS,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Jinn',
        strength: 'Travels faster the farther away it is from a player',
        weakness: 'Turning off the power will prevent it from using it\'s ability',
        evidence: [
            Evidence.EMF,
            Evidence.TEMPS,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Mare',
        strength: 'Increased chance of attack in the dark',
        weakness: 'Turning on the lights will lower the chance of attack',
        evidence: [
            Evidence.ORB,
            Evidence.WRITING,
            Evidence.BOX
        ]
    },
    {
        name: 'Myling',
        strength: 'Known to be quieter when hunting',
        weakness: 'Makes more paranormal sounds',
        evidence: [
            Evidence.EMF,
            Evidence.WRITING,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Oni',
        strength: 'More active when players are around',
        weakness: 'Being active will make ghost easier to find',
        evidence: [
            Evidence.EMF,
            Evidence.DOTS,
            Evidence.TEMPS
        ]
    },
    {
        name: 'Phantom',
        strength: 'Sanity drops quickly while looking directly at it',
        weakness: 'Taking a photo will make it go away',
        evidence: [
            Evidence.DOTS,
            Evidence.BOX,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Poltergeist',
        strength: 'Can throw objects',
        weakness: 'Ineffective in empty rooms',
        evidence: [
            Evidence.WRITING,
            Evidence.BOX,
            Evidence.FINGERPRINTS
        ]
    },
    {
        name: 'Revenant',
        strength: 'It will travel faster when hunting',
        weakness: 'Hiding will make it move very slow',
        evidence: [
            Evidence.ORB,
            Evidence.WRITING,
            Evidence.TEMPS
        ]
    },
    {
        name: 'Shade',
        strength: 'Being shy will make it harder to find',
        weakness: 'Won\'t hunt when multiple people are around',
        evidence: [
            Evidence.EMF,
            Evidence.WRITING,
            Evidence.TEMPS
        ]
    },
    {
        name: 'Spirit',
        strength: 'None',
        weakness: 'Smudge sticks stops attacks for a short period',
        evidence: [
            Evidence.EMF,
            Evidence.DOTS,
            Evidence.BOX
        ]
    },
    {
        name: 'Wraith',
        strength: 'Almost never touches the ground',
        weakness: 'Toxic reaction to salt',
        evidence: [
            Evidence.EMF,
            Evidence.DOTS,
            Evidence.BOX
        ]
    },
    {
        name: 'Yokai',
        strength: 'Talking near the ghost can anger it',
        weakness: 'While hunting it can only hear nearby voices',
        evidence: [
            Evidence.ORB,
            Evidence.DOTS,
            Evidence.BOX
        ]
    },
    {
        name: 'Yurei',
        strength: 'Strong effect on sanity',
        weakness: 'Smudge it\'s room to prevent it from wandering',
        evidence: [
            Evidence.ORB,
            Evidence.DOTS,
            Evidence.TEMPS
        ]
    }
]