const http = require("node:http");

const tasks = [
  {
    id: 1,
    title: "Prepare project status report",
    status: "IN_PROGRESS"
  },
  {
    id: 2,
    title: "Review project requirements",
    status: "TODO"
  },
  {
    id: 3,
    title: "Complete testing",
    status: "DONE"
  }
];

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET" && request.url === "/tasks") {
    response.writeHead(200);
    response.end(JSON.stringify(tasks));
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200);
    response.end(
      JSON.stringify({
        status: "OK",
        message: "Task Manager API is running"
      })
    );
    return;
  }

  response.writeHead(404);
  response.end(
    JSON.stringify({
      error: "Route not found"
    })
  );
});

server.listen(3000, () => {
  console.log("Task Manager API is running at http://localhost:3000");
});