<template>
  <div>
    <h1 class="fav_main_title">Favorites:</h1>
    <div class="favs_map_div">
      <div class="favs_map" v-for="favs in favs" :key="favs.char_id">
        <img
          @click="removeFromFavs(favs.char_id)"
          class="favs_map_img"
          :src="favs.img"
          alt="nothing"
        >
        <p class="char_map_title">{{favs.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  props: {
    favs: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    removeFromFavs: function(id) {
      console.log("hit");
      this.$emit("remove-from-favs", id);
    }
  }
};
</script>

<style>
.favs_map_div {
  display: flex;
  margin: 14vh 1vh auto 1vh;
  height: 410px;
  width: 98vw;
  overflow: scroll;
}

.favs_map {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 1%;
}

.favs_map_img {
  height: 400px;
  width: 300px;
  cursor: pointer;
}

.favs_map_title {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 70%;
  color: white;
}
.fav_main_title {
  position: absolute;
  top: 7vh;
}
</style>