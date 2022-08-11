import Dexie, { Table } from 'dexie';
import { ISongInfo } from '../utils/types';

export interface IFavoriteSongsTable extends ISongInfo {
  timestamp: number;
}

export class MySubClassedDexie extends Dexie {
  // 'songs' is added by dexie when declaring the stores()
  songs!: Table<IFavoriteSongsTable>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      songs: '++id, title, artist, &key, timestamp', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
