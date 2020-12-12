import { control } from '@/utl';
import { setting } from '@/config';

export default {
  state: {},
  effects: () => ({
    ProReset() {
      control(setting['Low Light'].OFF);
      control(setting.ProTune.on);
      control(setting['White Balance'].Native);
      control(setting.Color.Flat);
      control(setting.Sharpness.Low);
      control(setting['EV Steps']['-1']);
    },
  }),
};
