export interface Todo {
  id: number;
  description: string;
  done: boolean;
  data: Date | number;
  editable: boolean;
}
