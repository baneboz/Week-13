// Create a function that selects the second list and applies a class that sets some
// background color to it.
(function () {
  document.querySelector(".list__second").classList.add("list--bg");
})();

// Create a second function that, when triggered, selects all &lt;li&gt; elements on the page.
// The function also sets a class that sets some bg color to every &lt;li&gt; element.
(function () {
  const allLi = [
    ...document.querySelectorAll(
      ".list__first li, .list__second li, .list__third li "
    ),
  ];
  allLi.forEach(function (el) {
    el.classList.add("item--bg");
  });
})();

// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the text to uppercase.
(function () {
  const allLiThird = [...document.querySelectorAll(".list__third li")];
  allLiThird.forEach(function (el) {
    el.classList.add("item--transform");
  });
})();

// Create a function that selects the &lt;li&gt; element with class “active”.
// Remove the class from that element, and then select the first &lt;li&gt; element in the first unordered list using node relations.
// Apply class to that newly selected &lt;li&gt; element
const toggleActive = function () {
  const currentActiveLi = document.querySelector("li.active");
  currentActiveLi.classList.remove("active");
  currentActiveLi.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.classList.add(
    "active"
  );
};
toggleActive();

// Create a function that takes text from one of the &lt;li&gt; elements and presents it on screen using alert.
const alertTextFromLink = function () {
  alert(document.querySelector(".nav").firstElementChild.textContent);
};
// alertTextFromLink(); //call function

// Create one more function.
// The function should take some text as an argument. The function should select the last &lt;li&gt; element in the list and replace its text with text passed as the function argument.
const replaceLinkText = function (text) {
  document.querySelector(".nav").lastElementChild.textContent = text;
};
replaceLinkText("Contact Us");

// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second
// is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the
// select element. Add the whole dropdown list to DOM.

const createDropdown = function (elToAdd, whereToAdd) {
  let dropdown = `
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">`;
  for (let i = 0; i < elToAdd.length; i++) {
    dropdown += `<option value="${elToAdd[i]}">${elToAdd[i]}</option>`;
  }
  dropdown += `
 </select>`;

  document.querySelector(whereToAdd).insertAdjacentHTML("beforeend", dropdown);
};

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.
createDropdown(["Volvo", "Saab", "Opel"], ".first__div");
createDropdown(["Fiat", "Mazda", "Toyota"], ".last__div");

// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.
const validateForm = function () {
  const formInputs = Array.from(
    document.querySelectorAll(".contact-form input")
  );
  for (const input of formInputs) {
    if (input.required && input.value === "") {
      input.classList.add("error");
    }
  }
};
document.querySelector(".btn-submit").addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
