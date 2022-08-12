import Dexie, { Table } from 'dexie';
import { ISongInfo } from '../utils/types';

export interface IFavoriteSongsTable extends ISongInfo {
  timestamp: number;
}

export class DBController extends Dexie {
  // 'songs' is added by dexie when declaring the stores()
  songs!: Table<IFavoriteSongsTable>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      songs: '++id, title, artist, &key, timestamp', // Primary key and indexed props
    });
  }

  async addToFavorites(song: ISongInfo, timestamp: number) {
    return db.songs.add({ ...song, timestamp });
  }
  async getAllSongs() {
    return await db.songs.toArray();
  }
  async deleteFromFavorites(primaryKey: number) {
    return await db.songs.delete(primaryKey);
  }
  async findByKeyAndDelete(key: string) {
    const song = await db.songs.get({ key: key });
    if (song?.id) {
      return await db.songs.delete(song.id);
    }
  }
}

export const db = new DBController();
