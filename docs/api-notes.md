| Endpoint | Method | Purpose | Expected result |
|---|---|---|---|
| `/health` | GET | Check server status | HTTP 200 |
| `/tasks` | GET | Retrieve tasks | HTTP 200 |
| `/unknown` | GET | Test invalid route handling | HTTP 404 |

* The API runs locally on port 3000
* Task records are stored in memory
* Restarting the server resets the task data
* Current API does not support creating or updating tasks
* Authentication has not yet been implemented