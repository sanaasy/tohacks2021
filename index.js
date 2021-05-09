request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText)
  }
};
request.open('GET', `https://localhost:3000/get-activity`, true); 
request.send();