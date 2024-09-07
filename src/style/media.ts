type DeviceType = 'mobile' | 'tablet' | 'laptop';

const mediaSizes: Record<DeviceType, string> = {
  mobile: '426px', // 425
  tablet: '769px', // 768
  laptop: '1025px', // 1024
};

export type { DeviceType }
export { mediaSizes }