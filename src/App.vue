<template>
<div id="book">
    <div class="my-page" :key="item.id" v-for="item in sourceCover">
        <img :src="item.url" alt="">
    </div>
    <!-- <div class="my-page">
        <img :src="pic2" alt="">
    </div>
    <div class="my-page">
        <img :src="pic3" alt="">
    </div>
    <div class="my-page">
        <img :src="pic4" alt="">
    </div>
    <div class="my-page">
        <img :src="pic5" alt="">
    </div>
    <div class="my-page">
        <img :src="pic1" alt="">
    </div> -->
    <!-- <br>
    <h1>canvasCase</h1>
    <canvas id="page-case2"></canvas> -->
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {PageFlip} from 'page-flip';
// import { PageFlip } from 'm-page-flip'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      sourceCover: [
        {
          id: 0,
          url: require('./assets/0.jpg')
        },
        {
          id:1,
          url: require('./assets/1.jpg')
        },
        {
          id:2,
          url: require('./assets/2.jpg')
        },
        {
          id:3,
          url: require('./assets/3.jpg')
        },
        {
          id:4,
          url: require('./assets/4.jpg')
        },
        {
          id:5,
          url: require('./assets/5.jpg')
        },
        {
          id:6,
          url: require('./assets/6.jpg')
        },
        {
          id:7,
          url: require('./assets/7.jpg')
        },
        {
          id:8,
          url: require('./assets/8.jpg')
        },
        {
          id:9,
          url: require('./assets/9.jpg')
        }
      ],
      bookCover: []
    }
  },
  watch: {
    // bookCover() {
    //   pageFlip.updateFromHtml(document.querySelectorAll('.my-page'))
    // }
  },
  created() {
    this.bookCover = this.sourceCover.slice(0,3)
    // debugger
  },
  mounted() {
    // debugger
    const self = this
    // this.bookCover = this.sourceCover.slice(0,3)
    const pageFlip = new PageFlip(document.getElementById('book'),
        {
            width: 400, // required parameter - base page width
            height: 600,  // required parameter - base page height
            showCover: true
        }
    );

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    pageFlip.on('flip', (e) => {
            console.log("Current page: " + e.data);
            // callback code
            // debugger
            if (e.data === self.bookCover[self.bookCover.length - 1].id) {
              self.bookCover = self.sourceCover.slice(self.bookCover[self.bookCover.length-1].id + 1, self.bookCover[self.bookCover.length-1].id + 4)
              this.$nextTick(() => {
                const ss = document.querySelectorAll('.my-page')
              console.log(ss)
              pageFlip.updateFromHtml(ss);
              // pageFlip.flip(3)
              })
            } else if (e.data === 0 && self.bookCover[0].id > 2) {
              self.bookCover = self.sourceCover.slice(self.bookCover[0].id - 3,self.bookCover[0].id)
              this.$nextTick(() => {
                const ss = document.querySelectorAll('.my-page')
              console.log(ss)
              pageFlip.updateFromHtml(ss);
              })
            }
        }
    );

    // const pageFlip = new PageFlip(document.getElementById('page-case2'),
    //     {
    //         width: 400, // required parameter - base page width
    //         height: 600,  // required parameter - base page height
    //         showCover: true
    //     }
    // );
    // pageFlip.loadFromImages([this.pic1,this.pic2,this.pic3])
  }
}
</script>

<style>
html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#book {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>
