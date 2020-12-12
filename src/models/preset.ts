import { control } from '@/utl';
import { setting7 } from '@/config';

export default {
  state: {},
  effects: () => ({
    ProReset() {
      control(setting7['Low Light'].OFF);
      control(setting7.ProTune.on);
      control(setting7['White Balance'].Native);
      control(setting7.Color.Flat);
      control(setting7.Sharpness.Low);
      control(setting7['EV Steps']['-1']);
    },
  }),
};
