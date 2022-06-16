
/** List of primitive creation tools */
const toolPrimitives: { id: number, name: string }[] = [
    {
        id: 0,
        name: 'Куб'
    },
    {
        id: 1,
        name: 'Шар'
    },
    {
        id: 2,
        name: 'Конус'
    },
    {
        id: 3,
        name: 'Плоскость'
    },
];

/** List of effects creation tools */
const toolFx: { id: number, name: string }[] = [
    {
        id: 0,
        name: 'Дым'
    },
    {
        id: 1,
        name: 'Огонь'
    },
    {
        id: 6,
        name: 'Туман'
    },
    {
        id: 7,
        name: 'Огонь с дымом'
    },
];

/** List of triggers creation tools */
const toolTriggers: { id: number, name: string }[] = [
    {
        id: 8,
        name: 'Круг'
    },
    {
        id: 9,
        name: 'Квадрат'
    },
];

/** Get list of available objects to create */
export function getCreationToolsList(group?: 'primitives' | 'fx' | 'triggers'): { id: number, group?: string, name: string}[] {
    if (!group) return [
        ...toolPrimitives.map((t) => ({...t, group: 'primitives'})),
        ...toolFx.map((t) => ({...t, group: 'fx'})),
        ...toolTriggers.map((t) => ({...t, group: 'triggers'})),
    ];

    switch(group) {
        case 'primitives':
            return toolPrimitives;
        case 'fx':
            return toolFx;
        case 'triggers':
            return toolTriggers;
        default:
            return [];
    }
}
