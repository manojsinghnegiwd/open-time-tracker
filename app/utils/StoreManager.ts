import { StoreManager } from "../interfaces/StoreManager"
import { Task } from "../interfaces/Task"

class LocalStorageManager implements StoreManager {
  
  constructor (id: string) {
    this.id = id
  }

  private id = ""

  public async load () {
    let list: Task[] = []
    const localTasks = localStorage.getItem(this.id)

    if (localTasks) {
      list = JSON.parse(localTasks)
    }

    return list
  }

  public async store (tasks: Task[]) {
    try {
      localStorage.setItem(this.id, JSON.stringify(tasks))
      return true
    } catch (e) {
      return false
    }
  }
}

const storeManager = new LocalStorageManager("taskList")

export default storeManager
