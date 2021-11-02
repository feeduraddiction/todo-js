document.querySelector(".add-item").addEventListener("click", () => {
  createNewElement();
  appearActionBtns();
});

document.querySelector(".input input").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    createNewElement();
    appearActionBtns();
  }
});

document.querySelector(".delete-items").addEventListener("click", () => {
  deleteCompleted();
  appearActionBtns();
});


leaveActive();


function createNewElement() {

  if(document.querySelector(".input input").value.match(/^\s+$|^$/gi)){
    document.querySelector(".input input").classList.add("error-border")
    return
  } else {
    document.querySelector(".input input").classList.remove("error-border")
  }
  //create new elements
  let newElement = document.createElement("div");
  let newElementInside = document.createElement("div");
  let newCheckBox = document.createElement("input");

  //add class name to new elements
  newCheckBox.className = "doneTaskCheck";
  newElement.className = "addedItem";

  //set attributes for check box
  newCheckBox.setAttribute("type", "checkbox");

  //add newElement to ".todo-list" element
  document.querySelector(".todo-list").append(newElement);

  document.querySelectorAll(".addedItem").forEach((element) => {
    element.append(newCheckBox);
    element.append(newElementInside);
  });
  newElementInside.className = "addedItemText";
  newElementInside.innerHTML = document.getElementById("todo-input").value;
  document.querySelector(".input input").value = "";

}

function deleteCompleted() {
  Array.from(document.querySelectorAll(".addedItem"))
    .filter(
      (element, index) =>
        document.querySelectorAll(".doneTaskCheck")[index].checked
    )
    .forEach((element, index) => {
      element.remove();
    });
}

function leaveActive() {
  document.querySelectorAll(".sort-buttons input").forEach((element) => {
    element.onclick = function () {
      if (element.className === "all-items") {
        document
          .querySelectorAll(".addedItem")
          .forEach((element) => (element.style.display = "flex"));
      } else if (element.className === "active-items") {
        document
          .querySelectorAll(".addedItem")
          .forEach((element) => (element.style.display = "flex"));
        document
          .querySelectorAll(".doneTaskCheck")
          .forEach((element, index) => {
            if (element.checked) {
              document.querySelectorAll(".addedItem")[index].style.display =
                "none";
            }
          });
      } else if (element.className === "completed-items") {
        document
          .querySelectorAll(".addedItem")
          .forEach((element) => (element.style.display = "flex"));
        document
          .querySelectorAll(".doneTaskCheck")
          .forEach((element, index) => {
            if (!element.checked) {
              document.querySelectorAll(".addedItem")[index].style.display =
                "none";
            }
          });
      }
    };
  });
}

function appearActionBtns() {
  document.querySelectorAll(".addedItem").length > 0
    ? (document.querySelector(".action-buttons").style.opacity = "1")
    : (document.querySelector(".action-buttons").style.opacity = "0");
}
