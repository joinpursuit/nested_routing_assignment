let doc = document;

doc.addEventListener('DOMContentLoaded', () => {

  let searchBar = doc.querySelector('.search');
  let body = doc.querySelector('body');

  searchBar.addEventListener('change', (event) => {
    clearInfo();

    let user_input = (event.target.value).toLowerCase();
    let url = `http://localhost:5000/${user_input}`;

  if (user_input === 'users') {
    fireRequest(url, displayUsers);
  } else if (user_input === 'posts') {
    fireRequest(url, displayPosts);
  } else if (user_input === 'pictures') {
    fireRequest(url, displayPictures);
  } else {
    let error = doc.createElement('p');
    error.innerHTML = `Please enter valid input.`;
    body.appendChild(error);
  }
})

  async function fireRequest(url, callback) {
    let result = await axios.get(url);
    // debugger
    callback(result.data);
  }

  const displayPosts = (arr) => {
    // debugger
    arr.forEach(obj => {
      let p = doc.createElement('p');
      p.innerHTML = `User ID: ${obj.userId} <br> ${obj.body}`;
      body.appendChild(p);

    })
  }

  const displayPictures = (arr) => {
    arr.forEach(obj => {
      let p = doc.createElement('p');
      p.innerHTML = `User ID: ${obj.userId} <br> <img src="${obj.url}">`;
      body.appendChild(p);
    })
  }

  const displayUsers = (arr) => {
    arr.forEach(obj => {
      let p = doc.createElement('p');
      p.innerHTML = `User ID: ${obj.id} <br> Name: ${obj.name} <br> Age: ${obj.age}`;
      body.appendChild(p);
    })
  }

  const clearInfo = (p) => {
    p = doc.querySelector('p');
    if (p) {
      p.remove();
    }
  }

});
