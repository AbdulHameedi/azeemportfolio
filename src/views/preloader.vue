<script>
import { defineComponent } from 'vue';
import Home from '../components/Home.vue'

export default defineComponent({
    data(){
        return{
            loading: true
        }
    },
    components:{
        Home
    },
    mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); 
  }
})
</script>
<template>
    <div id="app">
    <transition name="fade">
      <div v-if="loading" class="preload">
        <div class="spinner"></div>
      </div>

      <!-- LANDING PAGE CONTENT-->
      <div v-else class="landing-page">
        <Home />
      </div>
    </transition>
</div>

</template>
<style>
.preload {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid yellow;
  border-top: 4px solid #2F2F2F; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* CSS for fading transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
