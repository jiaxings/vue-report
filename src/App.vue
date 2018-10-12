<template>
  <div id="app">
    <router-view/>
    <app-menu />
    <div class="container mx-auto">
      <ancestry-share></ancestry-share>
      <result-share></result-share>
    </div>
  </div>
</template>

<script>
import AncestryShare from '@/components/modals/AncestryShare'
import ResultShare from '@/components/modals/ResultShare'
import AppMenu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    AncestryShare,
    ResultShare,
    AppMenu
  }
}
</script>
<style>
  #app {
    position: relative;
  }
  .header-image {
    background: url('./assets/south.png') no-repeat;
    background-size: cover;
  }
  .bg-grey-transparent {
    background-color: rgba(184, 194, 204, .3);
  }

  .pop-out-enter-active,
  .pop-out-leave-active {
    transition: all 0.5s;
  }
  .pop-out-enter,
  .pop-out-leave-active {
    opacity: 0;
    transform: translateY(24px);
  }
</style>
