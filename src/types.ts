export interface Todo {
  id: string;
  checked: boolean;
  text: string;
}

export type Filters = 'All' | 'Active' | 'Completed';
