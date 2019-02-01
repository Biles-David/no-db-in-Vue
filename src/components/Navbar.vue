<template>
<div class='navbar'>
  <h1 class='navbar_title'> Breaking Bad Api </h1>
    <router-link to='/info'> 
      <button>To Info </button>
    </router-link>
    <router-link to='/'>
      <button>
        To Home 
      </button>
    </router-link>
</div>
</template>

<script>

export default {
  name: 'Navbar'
}

</script>

<style>
.navbar {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 10vh;
  width: 100vw;
  margin: 0;
}
.navbar_title {
  display: flex;
  font-size: 2.5em;
  color: white;
  margin-left: 2%;
}
</style>