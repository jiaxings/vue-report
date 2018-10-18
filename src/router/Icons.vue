<template>
  <div>

    <h1>Icon</h1>
    <icon-base name="icon-box"><icon-box></icon-box></icon-base>
    <icon-base name="icon-gese" view-box="0 0 37 23.125" :width="37" :height="23.125"
    ><icon-gese></icon-gese></icon-base>
    <icon-base name="icon-dna" view-box="0 0 36 36" :width="36" :height="36"><icon-dna></icon-dna></icon-base>
    <icon-base name="icon-menu" view-box="0 0 36 36" :width="36" :height="36" icon-color="#ffffff"><icon-menu></icon-menu></icon-base>

    <percent
      :percent="20"
      :size="20"
    ></percent>
    <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
      <img src="../assets/394.png" alt="" class="w-24 rounded-full">
    </div>
  </div>
</template>
<script>
import IconBox from '@/components/icons/IconBox'
import IconGese from '@/components/icons/IconGese'
import IconDna from '@/components/icons/IconDna'
import IconMenu from '@/components/icons/IconMenu'
import Percent from '@/components/Percent'
export default {
  components: {
    IconBox,
    IconGese,
    IconDna,
    IconMenu,
    Percent
  }
}
</script>
