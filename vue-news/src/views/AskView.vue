<template lang="">
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li class="post" v-for="item in fetchedAsk" :key="item.id">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>

          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link class="link-text" :to="`/user/${item.user}`">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { mapGetters } from 'vuex';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin';
//import bus from '../utils/bus.js';

export default {
  computed: {
    // #4 store/getters + array
    ...mapGetters(['fetchedAsk']),

    // #3 store/getters + dict
    // ...mapGetters({
    //   askItems: 'fetchedAsk',
    // }),

    // #2 map
    // import { mapState } from 'vuex';
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  mixins: [ListMixin],

  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched..ask');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // },

  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // },
};
</script>

<style scoped>
/* .ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.ask-title {
  margin: 0;
}

.link-text {
  color: #828282;
} */
</style>