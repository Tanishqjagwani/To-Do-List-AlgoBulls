import { v4 as uuid } from "uuid";
import randomColor from "randomcolor";
const taskLimitNumber = 10;

export const columnsRawData = [
  {
    id: 1,
    name: "No Status",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      {
        id: uuid(),
        text: "This is a task description of Learn GraphQL",
        idColumn: 1,
        title: "Learn React ",
      },
      {
        id: uuid(),
        text: "New slides for presentation",
        idColumn: 1,
        title: "Complete the Work",
      },
    ],
  },
  {
    id: 2,
    name: "ToDo",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      { id: uuid(), text: "Blog assets", idColumn: 2, title: "Read Blogs" },
    ],
  },
  {
    id: 3,
    name: "In Progress",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      {
        id: uuid(),
        text: "Change css img",
        idColumn: 3,
        title: "Meeting with Friends",
      },
      { id: uuid(), text: "Meeting", idColumn: 3, title: "Music Time" },
    ],
  },
  {
    id: 4,
    name: "In Progress",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [],
  },
];
