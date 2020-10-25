export interface IMisionProps {
  mision: string,
  checked: boolean,
  index: number
};

export type keyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type inputEvent = React.ChangeEvent<HTMLInputElement>;

export interface IMision {
  _id: string,
  missionName: string,
  description: string,
  checked: boolean,
  userId: string,
  deleted: boolean,
  timeStampt: Date
};

/* Components interfaces */
export interface IAddProps {
  addMission: (mission: string) => void
};

export interface ICheckboxProps {
  checked: boolean,
  updateCheck: (checked: boolean) => void
};

export interface IMisionProps {
  index: number
  mission: IMision
  deleteMission: (id: number) => void
  editMission: (id: number, name: string) => void
};

/* SHARED INTERFACES FRONT - BACK  */
export interface IResponse<T> {
  success: boolean,
  message?: string,
  data: T | null
};