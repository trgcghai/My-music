export interface Song {
  key: string;
  name: string;
  author: string;
  isFavorite: boolean;
  length: number;
}

export interface FileProps {
  path: string;
  relativePath: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
