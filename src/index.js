document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // function fetchTask(){
  //   fetch("")
  // }
    const form = document.querySelector("form")
    form.addEventListener("submit", event => {
      const input = document.querySelector("input").value
      const ul = document.querySelector("ul")
      ul.innerHTML += `<li>${input}</li>`

    })
});
