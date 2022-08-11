import { db } from '../db/db';
import { ISongInfo } from '../utils/types';

export const addToFavorites = async (song: ISongInfo, timestamp: number) => {
  return db.songs.add({ ...song, timestamp });
};

export const getAllSongs = async () => {
  return await db.songs.toArray();
};

export const deleteFromFavorites = async (primaryKey: number) => {
  return await db.songs.delete(primaryKey);
};

export const findByKeyAndDelete = async (key: string) => {
  const song = await db.songs.get({ key: key });
  if (song?.id) {
    return await db.songs.delete(song.id);
  }
};
