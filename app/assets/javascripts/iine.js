function post (){
  const submit = document.getElementById("btn");
  submit.addEventListener("click", () => {
  console.log('いいね');
  const XHR = new XMLHttpRequest();
  XHR.open("POST", "/posts", true);
  });
};

window.addEventListener('load', post);
