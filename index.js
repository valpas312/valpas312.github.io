fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])
    const user = data.results[0];
    const nombreCompleto = `${user.name.first} ${user.name.last}`;
    document.querySelector("#nombre").innerHTML = nombreCompleto;
    document.querySelector("#foto").src = user.picture.large;
    document.querySelector("#edad").innerHTML = user.dob.age;
    document.querySelector("#email").innerHTML = user.email;
    document.querySelector("#telefono").innerHTML = user.phone;
    document.querySelector("#pais").innerHTML = `${user.location.city}, ${user.location.country}`;
  });
