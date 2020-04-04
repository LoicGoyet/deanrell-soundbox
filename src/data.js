import {getPublicPath} from './utils';

const sounds = {
    byId: {
        'airtime-1': {
            id: 'airtime-1',
            source: getPublicPath('sounds/airtime-1.mp3'),
            label: 'Airtime 1',
            color: '#000000',
        },
        'airtime-2': {
            id: 'airtime-2',
            source: getPublicPath('sounds/airtime-2.mp3'),
            label: 'Airtime 2',
            color: '#05040C',
        },
        'airtime-3': {
            id: 'airtime-3',
            source: getPublicPath('sounds/airtime-3.mp3'),
            label: 'Airtime 3',
            color: '#090818',
        },
        'airtime-4': {
            id: 'airtime-4',
            source: getPublicPath('sounds/airtime-4.mp3'),
            label: 'Airtime 4',
            color: '#0D0C23',
        },
        'brutal': {
            id: 'brutal',
            source: getPublicPath('sounds/brutal.mp3'),
            label: 'BRU-TAL',
            color: '#12102F',
        },
        'corkscrew': {
            id: 'corkscrew',
            source: getPublicPath('sounds/corkscrew.mp3'),
            label: 'Corkscrew',
            color: '#16143B',
        },
        'dive-loop': {
            id: 'dive-loop',
            source: getPublicPath('sounds/dive-loop.mp3'),
            label: 'Dive loop',
            color: '#1A1847',
        },
        'en-nylon': {
            id: 'en-nylon',
            source: getPublicPath('sounds/en-nylon.mp3'),
            label: 'En nylon',
            color: '#1F1C53',
        },
        'g': {
            id: 'g',
            source: getPublicPath('sounds/g.mp3'),
            label: 'G',
            color: '#232060',
        },
        'intense': {
            id: 'intense',
            source: getPublicPath('sounds/intense.mp3'),
            label: 'Intense',
            color: '#27246C',
        },
        'last-spin': {
            id: 'last-spin',
            source: getPublicPath('sounds/last-spin.mp3'),
            label: 'last-spin',
            color: '#2B2778',
        },
        'roll-over': {
            id: 'roll-over',
            source: getPublicPath('sounds/roll-over.mp3'),
            label: 'roll-over',
            color: '#2F2B84',
        },
        'shout-1': {
            id: 'shout-1',
            source: getPublicPath('sounds/shout-1.mp3'),
            label: 'shout-1',
            color: '#332F91',
        },
        'shout-2': {
            id: 'shout-2',
            source: getPublicPath('sounds/shout-2.mp3'),
            label: 'shout-2',
            color: '#37329D',
        },
        'zero-g-roll-1': {
            id: 'zero-g-roll-1',
            source: getPublicPath('sounds/zero-g-roll-1.mp3'),
            label: 'zero-g-roll-1',
            color: '#3B36A9',
        },
        'zero-g-roll-2': {
            id: 'zero-g-roll-2',
            source: getPublicPath('sounds/zero-g-roll-2.mp3'),
            label: 'zero-g-roll-2',
            color: '#3F39B6',
        },
    },
    allIds: [
        'airtime-1',
        'airtime-2',
        'airtime-3',
        'airtime-4',
        'brutal',
        'corkscrew',
        'dive-loop',
        'en-nylon',
        'g',
        'intense',
        'last-spin',
        'roll-over',
        'shout-1',
        'shout-2',
        'zero-g-roll-1',
        'zero-g-roll-2',
    ]
}

export default sounds;