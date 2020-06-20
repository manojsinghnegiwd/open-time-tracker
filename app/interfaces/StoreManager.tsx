import { Task } from "./Task";

export interface StoreManager {
  load: () => Promise<Task[]>
  store: (tasks: Task[]) => Promise<boolean>
}