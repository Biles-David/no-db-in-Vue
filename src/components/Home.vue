<template>
  <div>
    <!-- <Navbar/>  -->
    <Favorites @remove-from-favs="removeFromFavs" v-if="favs.length" class="" :favs="favs" />
    <List :info="info" @add-to-fav="addToFav" />
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue';
import axios from 'axios';
import Favorites from './Favorites.vue';
import List from './List.vue';

export default {
  name: 'Home',
  components: {
    // Navbar,
    Favorites,
    List
  },
  data () {
    return {
      test: 'testing this this this this',
      info: null,
      image: '',
      favShow: false,
      favs: []
    }
  },
  mounted: function () {
    axios('https://www.breakingbadapi.com/api/characters').then( response => this.info = response.data)
  },
  methods: {
    addToFav: function(id){
      let double = this.favs.findIndex( e => e.char_id === id)
      let index = this.info.findIndex(e => e.char_id === id)
      if(double === -1){
        this.favs.push(this.info[index])
      } else {
        alert(`Can't add ${this.info[index].name} twice`)
      }
    },
    removeFromFavs: function (id) {
      let index = this.favs.findIndex(e => e.char_id === id)
      this.favs.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
