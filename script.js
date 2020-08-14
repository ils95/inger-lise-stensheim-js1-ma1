// Question 1

const cat = {
  complain: "Meow!",
  sayMeow: function () {
    console.log(this.complain);
  },
};

cat.sayMeow();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function createList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

createList(cats);

// Question 8

const container = document.querySelector(".cat-container");

console.log(container);

let html = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";

    if (cats[i].age) {
      age = cats[i].age;
    }

    html =
      html +
      `<div>
        <h5>${cats[i].name}</h5>
        <p>${age}</p>
      </div>
      `;

    console.log(html);
  }
  return container;
}

createCats(cats);
container.innerHTML = html;
