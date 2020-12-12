// https://github.com/KonradIT/goprowifihack/blob/master/HERO7/HERO7-Commands.md#video
export const setting = {
  Resolutions: {
    '4K': [2, 1],
    '4K 4:3': [2, 18],
    '2.7K': [2, 4],
    '1440p': [2, 7],
    '1080p': [2, 9],
    '960p': [2, 10],
    '720p': [2, 12],
  },
  'Frame Rate': {
    '240fps': [3, 0],
    '120fps': [3, 1],
    '100fps': [3, 2],
    '90fps': [3, 3],
    '80fps': [3, 4],
    '60fps': [3, 5],
    '50fps': [3, 6],
    '48fps': [3, 7],
    '30fps': [3, 8],
    '25fps': [3, 9],
  },
  FOV: {
    Wide: [4, 0],
    SuperView: [4, 3],
    Linear: [4, 4],
  },
  'Aspect Ratio': {
    '4:3': [108, 0],
    '16:9': [108, 1],
  },
  'Low Light': {
    OFF: [8, 0],
  },
  'EIS (Video Stabilisation)': {
    On: [78, 1],
    OFF: [78, 0],
  },
  ProTune: {
    on: [10, 1],
  },
  'White Balance': {
    Native: [11, 4],
  },
  Color: {
    Flat: [12, 1],
  },
  'ISO Limit': {
    6400: [13, 0],
    1600: [13, 1],
    400: [13, 2],
    3200: [13, 3],
    800: [13, 4],
    200: [13, 7],
    100: [13, 8],
  },
  'ISO Mode/Lock': {
    Max: [74, 0],
    Lock: [74, 1],
  },
  Sharpness: {
    Low: [14, 2],
  },
  'EV Steps': {
    '-1': [15, 6],
  },
};
