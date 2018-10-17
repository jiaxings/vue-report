<template>
  <div>

    <h1>Icon</h1>
    <icon-base name="icon-box"><icon-box></icon-box></icon-base>
    <icon-base name="icon-gese" view-box="0 0 37 23.125" :width="37" :height="23.125"
    ><icon-gese></icon-gese></icon-base>
    <icon-base name="icon-dna" view-box="0 0 36 36" :width="36" :height="36"><icon-dna></icon-dna></icon-base>
    <icon-base name="icon-menu" view-box="0 0 36 36" :width="36" :height="36" icon-color="#ffffff"><icon-menu></icon-menu></icon-base>
  </div>
</template>
<script>
import IconBox from '@/components/icons/IconBox'
import IconGese from '@/components/icons/IconGese'
import IconDna from '@/components/icons/IconDna'
import IconMenu from '@/components/icons/IconMenu'
export default {
  components: {
    IconBox,
    IconGese,
    IconDna,
    IconMenu
  }
}
</script>
