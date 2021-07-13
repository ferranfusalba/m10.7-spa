<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand text-warning" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/"
              ><a class="nav-link text-white" href="#">Home</a></router-link
            >
            <router-link to="/clients"
              ><a class="nav-link text-white" href="#">Clients</a></router-link
            >
            <router-link to="/proveidors"
              ><a class="nav-link text-white" href="#"
                >Proveïdors</a
              ></router-link
            >
            <router-link to="/magatzem"
              ><a class="nav-link text-white" href="#">Magatzem</a></router-link
            >
            <li class="nav-item dropdown">
              <a class="nav-link text-white dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Botiga (router-link)</a>
              <div class="dropdown-menu">
                <router-link to="/botiga/alimentacio" class="dropdown-item text-dark">Alimentació</router-link>
                <router-link to="/botiga/congelats" class="dropdown-item text-dark">Congelats</router-link>
              </div>
            </li>
            <router-link to="/botiga"
              ><a class="nav-link text-white" href="#">Botiga (components dinàmics)</a></router-link
            >
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
