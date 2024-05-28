function markAsDone(todoId) {
  const todo = document.getElementById(todoId);
  todo.children[2].innerHTML = "Done!";
}

function createChild(title, description, id) {
  const child = document.createElement("div");
  child.setAttribute("id", id);

  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;

  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;

  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as read";
  thirdGrandParent.onclick = function () {
    markAsDone(id);
  };

  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent);

  console.log(child);
  return child;
}

function changeDomAccToState(state) {
  const parent = document.getElementById("container");
  parent.innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    const child = createChild(
      state[i].title,
      state[i].description,
      state[i].id
    );
    parent.appendChild(child);
  }
}

window.setInterval(async function () {
  const res = await fetch("https://sum-server.100xdevs.com/todos");
  const json = await res.json();
  changeDomAccToState(json.todos);
}, 3000);

// changeDomAccToState([
//   {
//     id: "001",
//     title: "Complete project proposal",
//     description:
//       "Write and submit the project proposal for the new client by the end of the week.",
//   },
//   {
//     id: "002",
//     title: "Team meeting",
//     description:
//       "Schedule and prepare agenda for the team meeting to discuss project milestones.",
//   },
//   {
//     id: "003",
//     title: "Code review",
//     description:
//       "Review the code submitted by junior developers and provide feedback.",
//   },
//   {
//     id: "004",
//     title: "Update documentation",
//     description:
//       "Update the project documentation to reflect recent changes and new features.",
//   },
//   {
//     id: "005",
//     title: "Client presentation",
//     description:
//       "Create and practice the presentation for the upcoming client meeting.",
//   },
//   {
//     id: "006",
//     title: "Bug fixing",
//     description:
//       "Identify and fix bugs reported by QA team in the latest software release.",
//   },
//   {
//     id: "007",
//     title: "Research new tools",
//     description:
//       "Research and evaluate new tools that can improve our development process.",
//   },
//   {
//     id: "008",
//     title: "Prepare sprint report",
//     description:
//       "Compile and prepare the sprint report for the past two weeks of work.",
//   },
//   {
//     id: "009",
//     title: "Customer feedback analysis",
//     description:
//       "Analyze the recent customer feedback and prepare a summary for the team.",
//   },
//   {
//     id: "010",
//     title: "Design new feature",
//     description:
//       "Design the specifications and workflow for the new feature requested by clients.",
//   },
// ]);
