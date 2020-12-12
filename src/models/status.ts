import { control } from '@/utl';

interface Configs {
  [key: string]: number | string;
}

export default {
  state: {
    status: {} as Configs,
    settings: {} as Configs,
  },

  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  effects: (dispatch) => ({
    async getStatus() {
      // https://github.com/KonradIT/goprowifihack/blob/master/HERO4/CameraStatus.md
      const res = await control('status');
      dispatch.status.update(res);
    },
  }),
};
