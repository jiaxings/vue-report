<template>
  <div id="app">
    <router-view/>
    <app-menu />
    <ancestry-share></ancestry-share>
      <ancestry-detail></ancestry-detail>
      <result-share></result-share>
  </div>
</template>

<script>
import AncestryShare from '@/components/modals/AncestryShare'
import AncestryDetail from '@/components/modals/AncestryDetail'
import ResultShare from '@/components/modals/ResultShare'
import AppMenu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    AncestryShare,
    AncestryDetail,
    ResultShare,
    AppMenu
  }
}
</script>
<style>
  #app {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
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
