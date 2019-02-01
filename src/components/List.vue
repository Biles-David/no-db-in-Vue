<template>
    <div class='char_map_div'>
      <div class='char_map' v-for="info in info" :key="info.char_id">
        <img @click="addToFav(info.char_id)" :src='info.img' />
        <p class='char_map_title'> {{info.name}} </p>
        <!-- <router-link to=`/info/${info.char_id}`><button> More Info </button></router-link> -->
      </div>
    </div>
</template>

<script>

export default {
  name: 'Favorite',
  props: {
    info: {
      type: Array,
    }
  },
  data () {
    return {
      currentItemIndex: null  
    }
  },
  methods: {
    addToFav: function (id) {
      this.$emit('add-to-fav', id)
    }
  }
}

</script>

<style>
.char_map_div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12vh;
}

.char_map {
  position: relative;
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 1vh;
}

.char_map img {
  height: 400px;
  width: 300px;
  cursor: pointer;
}

.char_map_title {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 70%;
  color: white;
}
</style>