import {
    teal, indigo,
} from '@material-ui/core/colors';

export const crews = [
    {
        text: 'Jim',
        id: 1,
        color: indigo
    }, {
        text: 'Pete',
        id: 2,
        color: teal
    }
];

export const equipment = [
    { text: 'Pickup 1', id: 1 },
    { text: 'Pickup 2', id: 2 },
    { text: "Mow Deck 1", id: 3 },
    { text: "Hydroseeder 1", id: 4 }
];

export const appointments = [
    {
        title: 'Miller Brick Patio',
        startDate: new Date(2021, 2, 23),
        endDate: new Date(2021, 2, 25),
        allDay: true,
        id: 1,
        crewId: 1,
        equipId: [1],
    },
    {
        title: 'Sanders Lawn Hydroseed',
        startDate: new Date(2021, 2, 22),
        endDate: new Date(2021, 2, 23),
        allDay: true,
        id: 2,
        crewId: 2,
        equipId: [2, 3, 4],
    },
    {
        title: 'Crichton Lawn Hydroseed',
        startDate: new Date(2021, 2, 23),
        endDate: new Date(2021, 2, 24),
        allDay: true,
        id: 3,
        crewId: 2,
        equipId: [2, 3, 4],
    },
    {
        title: 'Smith Lawn Sod Installation',
        startDate: new Date(2021, 2, 24),
        endDate: new Date(2021, 2, 25),
        allDay: true,
        id: 4,
        crewId: 2,
        equipId: [2, 3, 4],
    },

]
