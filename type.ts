type Status = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: Status;
}

let id = 1;

function addTask(tasks: Task[], title: string): Task[] {
  return [...tasks, { id: id++, title, status: "todo" }];
}

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter(task => task.id !== id);
}

function filterTask(tasks: Task[], status: Status): Task[] {
  return tasks.filter(task => task.status === status);
}

function countTask(tasks: Task[], status: Status): number {
  return filterTask(tasks, status).length;
}