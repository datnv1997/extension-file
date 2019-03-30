fetch("https://api.github.com/users/conanak99")
    .then(res => res.json())
    .then(result => console.log(result.id))
    .catch(err => console.error(err));