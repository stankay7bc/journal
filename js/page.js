document.body.onload = event => {

  let data = window.location.search.match(/(\d+)_(.+)/);

  let postLink =
    `https://raw.githubusercontent.com/stankay7bc/journal/master/posts/${data[0]}.txt`;
  let myRequest = new Request(postLink);

  fetch(myRequest).then(function(response) {
    return response.text();
  }).then(function(response) {
    //console.log(response);
    document.querySelector('article').innerHTML = response;
  });
  
};
