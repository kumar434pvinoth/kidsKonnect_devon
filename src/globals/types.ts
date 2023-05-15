export interface IKidsKonnectData {
  id: string;
  day: string;
  start_time: string,
  end_time: string, 
  product_name: string,
  child_id: number,
  group: IGroup;
  presence: string
}

export interface IGroup {
  id: number;
  name: string;
}
export interface IKidsKonnectChildren {
  id: number,
  name: string,
  avatar: string;
}
export interface IKidsKonnectChildren {
  id: number,
  name: string,
  avatar: string;
}
export interface IKidsKonnectNews {
  title: string;
  author: string;
  content: string;
  id: number;
}
export interface IKidsKonnectNewsPost {
  title: string;
  author: string;
  content: string;
  id: number;
}
export interface IMessage {
  message: String;
}









