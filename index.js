const datos = () =>
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      const user = data.results[0];
      const nombreCompleto = `${user.name.first} ${user.name.last}`;

      localStorage.setItem("nombre", nombreCompleto);
      localStorage.setItem("user", JSON.stringify(user));

      document.querySelector("#nombre").innerHTML = nombreCompleto;
      document.querySelector("#foto").src = user.picture.large;
      document.querySelector("#edad").innerHTML = user.dob.age;
      document.querySelector("#email").innerHTML = user.email;
      document.querySelector("#telefono").innerHTML = user.phone;
      document.querySelector(
        "#pais"
      ).innerHTML = `${user.location.city}, ${user.location.country}`;
    });

if (localStorage.length === 0) {
  datos();
} else {
  document.querySelector("#nombre").innerHTML = localStorage.getItem("nombre");
  document.querySelector("#foto").src = JSON.parse(
    localStorage.getItem("user")
  ).picture.large;
  document.querySelector("#edad").innerHTML = JSON.parse(
    localStorage.getItem("user")
  ).dob.age;
  document.querySelector("#email").innerHTML = JSON.parse(
    localStorage.getItem("user")
  ).email;
  document.querySelector("#telefono").innerHTML = JSON.parse(
    localStorage.getItem("user")
  ).phone;
  document.querySelector("#pais").innerHTML = `${
    JSON.parse(localStorage.getItem("user")).location.city
  }, ${JSON.parse(localStorage.getItem("user")).location.country}`;
}

const cambiarDatos = () => (localStorage.clear(), location.reload());
