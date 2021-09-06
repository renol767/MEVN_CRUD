<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left" href="/">MEVN</a>
        <ul class="nav navbar-nav mr-auto mt-2 mt-lg-0 flex-row float-right">
          <li class="nav-item mr-8">
            <router-link class="nav-link pr-3" to="/add-data">Tambah Data</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
