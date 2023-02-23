let example1 = document.querySelector("p");
example1.textContent = "🤗" + example1.textContent + "😋";
console.log(example1);

let example2 = document.querySelector(".example-class");
example2.style.backgroundColor = "red";
example2.style.color = "white";
console.log(example2);

let example3 = document.querySelector("#example-id");
example3.style.backgroundColor = "url(picture.png)";
console.log(example3);

let example4 = document.querySelector("p:nth-child(4");
example4.style.width = "200px";
example4.style.height = "200px";
example4.style.margin = "30px";
example4.style.transform = "rotate(-45deg)";
console.log(example4);

let list = document.createElement("ul"); //создает объект
document.body.append(list);
for (let i = 0; i <= 10; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "example" + i;
  list.append(listItem);
}

//тема: событие
let helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", function () {
  alert("hello!");
});

let helloBtn2 = document.querySelector("#hi");
helloBtn2.addEventListener("mousemove", function () {
  alert("hi bro");
});

let addParagraph = document.querySelector("#add-paragraph");
addParagraph.addEventListener("click", function () {
  let article = document.querySelector("article");
  let newParagraph = document.createElement("p");
  newParagraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam,corporis laudantium cum delectus soluta?";
  article.append(newParagraph);
});

let addList = document.querySelector("#add-list");
addList.addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.textContent = "lorem";
  list.append(newList);
});

let example18th = document.querySelector("#example-1");
let example1Paragraph = document.querySelector("#example-1-target");
