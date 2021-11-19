import type { HMSStore } from '@100mslive/hms-video-store';
import { HMSReactiveStore } from '@100mslive/hms-video-store';
import { readable } from 'svelte/store';

const hms = new HMSReactiveStore();

const hmsStore = hms.getStore();
export const hmsActions = hms.getHMSActions();

export const getHMSState = <StateType>(selector: (state: HMSStore) => StateType) =>
  readable<StateType>(null, (set) => {
    const subscription = hmsStore.subscribe((val) => set(val), selector);

    return () => subscription();
  });
