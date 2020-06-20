<template>
  <section class="">
    <port-header/>
    <port-main/>
    <port-footer/>
  </section>
</template>

<script>
import header from '~/components/header.vue'
import main from '~/components/main.vue'
import footer from '~/components/footer.vue'

export default {
  components: {
    'port-header': header,
    'port-main': main,
    'port-footer': footer
  }
}
</script>

<style>

</style>
