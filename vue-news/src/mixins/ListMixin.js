// mixin
import bus from '../utils/bus.js';

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_LIST')
        .then(() => {
          console.log('fetched..mixins');
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  },
};

// HOC
// export default function create() {
//     // 재사용할 컴포넌트 옵션
// }