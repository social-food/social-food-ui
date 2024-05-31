export const colors = {
    white: 'white',

    red01: 'red01',
    red02: 'red02',
    red03: 'red03',

    brown01: 'brown01',

    light_orange01: 'light_orange01',

    gray01: 'gray01',
    gray02: 'gray02',
    gray03: 'gray03',

    black01: 'black01',
    black02: 'black02',
}

type ColorsKeyType = keyof typeof colors;
export type ColorsType = typeof colors[ColorsKeyType];

export const colorsPalette: Record<ColorsType, string> = {
    [colors.white]: '#FFFFFF',

    [colors.red01]: '#FF7F50',
    [colors.red02]: '#DD6236',
    [colors.red03]: '#8F1E00',

    [colors.brown01]: '#8B4513',

    [colors.light_orange01]: '#FFD299',

    [colors.gray01]: '#F7EEDD',
    [colors.gray02]: '#EDE4D3',
    [colors.gray03]: '#C4BCAB',

    [colors.black01]: '#000000',
    [colors.black02]: '#2C2C2C',
}