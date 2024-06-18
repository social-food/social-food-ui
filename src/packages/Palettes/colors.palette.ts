export const colors = {
    black01: 'black01',
    black02: 'black02',
    black03: 'black03',
    black04: 'black04',
    black05: 'black05',
    
    russet01: 'russet01',
    russet02: 'russet02',
    russet03: 'russet03',
    russet04: 'russet04',
    
    coral01: 'coral01',
    coral02: 'coral02',
    coral03: 'coral03',
    coral04: 'coral04',
    coral05: 'coral05',
    
    sunset01: 'sunset01',
    sunset02: 'sunset02',
    sunset03: 'sunset03',
    sunset04: 'sunset04',

    bone01: 'bone01',
    bone02: 'bone02',
    bone03: 'bone03',
    
    white01: 'white01',
    white02: 'white02',
    white03: 'white03',
    white04: 'white04',
}

type ColorsKeyType = keyof typeof colors;
export type ColorsType = typeof colors[ColorsKeyType];

export const colorsPalette: Record<ColorsType, string> = {
    [colors.black01]: '#000000',
    [colors.black02]: '#0A0A0A',
    [colors.black03]: '#141414',
    [colors.black04]: '#1F1F1F',
    [colors.black05]: '#292929',
    
    [colors.russet01]: '#8B4513',
    [colors.russet02]: '#A25016',
    [colors.russet03]: '#B45918',
    [colors.russet04]: '#C5621B',
    
    [colors.coral01]: '#FF7F50',
    [colors.coral02]: '#FF9670',
    [colors.coral03]: '#FFA585',
    [colors.coral04]: '#FFB499',
    [colors.coral05]: '#FFC3AD',
    
    [colors.sunset01]: '#FFD299',
    [colors.sunset02]: '#FFDCAD',
    [colors.sunset03]: '#FFE4C2',
    [colors.sunset04]: '#FFEDD6',
    
    [colors.bone01]: '#EDE4D3',
    [colors.bone02]: '#F3EDE2',
    [colors.bone03]: '#F9F6F1',
    
    [colors.white01]: '#FFFFFF',
    [colors.white02]: '#F5F5F5',
    [colors.white03]: '#EBEBEB',
    [colors.white04]: '#E0E0E0',
}