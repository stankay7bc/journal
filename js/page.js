document.body.onload = event => {

  let postLink ='https://raw.githubusercontent.com/stankay7bc/journal/master/posts/tomatoes.txt';
  let myRequest = new Request(postLink);

  fetch(myRequest).then(function(response) {
    return response.text();
  }).then(function(response) {
    //console.log(response);
    document.querySelector('article').textContent = response;
  });
  
};