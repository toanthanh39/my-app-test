export interface useToggleType {
  isOpen: boolean;
  setHide: () => void;
  setShow: () => void;
  toggleShow: () => void;
}
export interface Data {
  id: number;
  name: string;
  address: string;
  video?: string;
  type: string;
  images?: string[];
}
