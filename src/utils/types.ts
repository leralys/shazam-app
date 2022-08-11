export enum RESPONSES {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
}

export interface ILink {
  caption: string;
  uri: string;
  id: string;
}

export interface ISongInfo {
  title: string;
  artist: string;
  coverart: string;
  key: string;
  links: ILink[];
  file: string | null;
  artistImage: string | null;
  id?: number;
}

export interface IResponseAction {
  name?: string;
  type: string;
  id?: string;
  uri?: string;
}

export interface IResponseBeacondata {
  type: string;
  providername: string;
}

export interface IResponseProviderActions {
  name: string;
  type: string;
  uri: string;
}

export interface IResponseProvider {
  caption: string;
  images: {
    overflow: string;
    default: string;
  };
  actions: IResponseProviderActions[];
  type: string;
}

export interface ITrack {
  track: {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: {
      subject: string;
      text: string;
      href: string;
      image: string;
      twitter: string;
      html: string;
      avatar?: string;
      snapchat: string;
    };
    images: {
      background: string;
      coverart: string;
      coverarthq: string;
      joecolor: string;
    };
    hub: {
      type: string;
      image: string;
      actions: IResponseAction[];
      options: [
        {
          caption: string;
          actions: IResponseAction[];
          beacondata: IResponseBeacondata;
          image: string;
          type: string;
          listcaption: string;
          overflowimage: string;
          colouroverflowimage: boolean;
          providername: string;
        },
        {
          caption: string;
          actions: IResponseAction[];
          beacondata: IResponseBeacondata;
          image: string;
          type: string;
          listcaption: string;
          overflowimage: string;
          colouroverflowimage: boolean;
          providername: string;
        }
      ];
      providers: IResponseProvider[];
      explicit: boolean;
      displayname: string;
    };
  };
}
