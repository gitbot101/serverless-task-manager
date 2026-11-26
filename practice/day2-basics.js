const tasks = [{
    id: 1,
    title: "Complete Serverless Task Manager",
    description: "Finish building the serverless task manager application.",
    status: "in-progress",
    dueDate: "2024-06-30",
    priority: "high"
},
{
    id: 2,
    title: "Write Documentation",
    description: "Create comprehensive documentation for the task manager.",
    status: "not-started",
    dueDate: "2024-07-05",
    priority: "medium"  
},
{
    id: 3,
    title: "Implement Notifications",
    description: "Add notification functionality to alert users of task updates.",
    status: "not-started",
    dueDate: "2024-07-10",
    priority: "low"
}];

for (const task of tasks) {
    console.log(task.id, task.title, task.description, task.status, task.dueDate, task.priority);
    console.log(`Task ID: ${task.id}`);
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Priority: ${task.priority}`);
    console.log('-------------------------');
}
