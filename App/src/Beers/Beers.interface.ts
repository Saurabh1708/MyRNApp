export type Beer = {
  name: string;
  tagline: string;
  imgUrl: string;
  description: string;
};

export type BeerFetchingHookResponse = {
  fetchNextPage: () => void;
};
