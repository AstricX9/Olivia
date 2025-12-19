import { ipcRenderer } from 'electron';
import store from '../store';

export const loadURL = (url: string) => {
  ipcRenderer.send('renderer-log', `loadURL called with ${url}`);
  const tab = store.tabs.selectedTab;

  if (!tab) {
    store.tabs.addTab({ url, active: true });
  } else {
    tab.url = url;
    tab.callViewMethod('loadURL', url);
  }
};
