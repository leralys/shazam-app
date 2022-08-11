import { ITrack, ISongInfo, ILink, IResponseProvider } from './types';

enum Shazam {
  Caption = 'Open in Shazam',
  Id = 'SHAZAM',
}

const addSongProviders = (
  providersArray: IResponseProvider[],
  newArray: ILink[]
): void => {
  providersArray.forEach((el: IResponseProvider) => {
    const provider = {} as ILink;
    provider.caption = el?.caption;
    provider.uri = el.actions[0]?.uri;
    provider.id = el?.type;
    newArray.push(provider);
  });
};

export const prepareSongsArray = (tracks: ITrack[]) => {
  const songsArray: ISongInfo[] = [];
  tracks.forEach((el: ITrack) => {
    const song = {} as ISongInfo;
    const providersArray: ILink[] = [];
    const appleProvider = {} as ILink;
    // add apple music as a provider
    appleProvider.caption = el?.track?.hub?.options[0]?.listcaption;
    appleProvider.uri = el?.track?.hub?.options[0]?.actions[0]?.uri || '';
    appleProvider.id = el?.track?.hub?.type;
    providersArray.push(appleProvider);
    // add spotify
    addSongProviders(el.track.hub.providers, providersArray);
    //add shazam as a third provider
    providersArray[2].caption = Shazam.Caption;
    providersArray[2].uri = el?.track?.share?.href;
    providersArray[2].id = Shazam.Id;
    // build a song object
    song.key = el?.track?.key;
    song.title = el?.track?.title;
    song.artist = el?.track?.subtitle;
    song.coverart = el?.track?.share?.image;
    song.file = el?.track?.hub?.actions[1]?.uri ?? null;
    song.artistImage = el?.track?.share?.avatar ?? null;
    song.links = providersArray;
    songsArray.push(song);
  });
  return songsArray;
};
