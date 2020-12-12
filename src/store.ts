import { createStore } from 'rax-app';
import stream from './models/stream';
import media from './models/media';
import status from './models/status';
import preset from './models/preset';

const store = createStore({ stream, media, status, preset });

export default store;
