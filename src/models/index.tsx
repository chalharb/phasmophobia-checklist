export enum Evidence {
    BOX = 'Spirit Box',
    DOTS = 'D.O.T.S.',
    EMF = 'EMF Level 5',
    FINGERPRINTS = 'Fingerprints',
    ORB = 'Ghost Orb',
    TEMPS = 'Freezing Temps',
    WRITING = 'Ghost Writing',
}

export interface Ghost {
    name: string
    evidence: Array<Evidence>
    strength: string
    weakness: string
}

export interface GhostList {
    data: Array<Ghost>
}