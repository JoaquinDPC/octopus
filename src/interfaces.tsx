export interface IMisionProps {
  mision: string,
  checked: boolean,
  index: number
};

export type keyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type inputEvent = React.ChangeEvent<HTMLInputElement>;

export interface IMision {
  id: number,
  checked: boolean,
  name: string
}