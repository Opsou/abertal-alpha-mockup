<template>
  <div>
    <membership-select></membership-select>
    <div v-for="person in persons">
      <b-btn v-b-toggle.person variant="primary">Mostrar/Ocultar</b-btn>
      <b-btn variant="danger">Borrar</b-btn>
      <b-collapse id="person" visible accordion="my-accordion">
        <person></person>
      </b-collapse>
    </div>

    <b-button variant="primary" @click="addPerson">Añadir persona</b-button>

    <b-button variant="primary" @click="$router.push('home')">Save</b-button>
  </div>
</template>


<script>
  export default {
    name: 'new',
    data () {
      return {
        persons: [1]
      }
    },
    methods: {
      addPerson () {
        this.persons.push(1)
      }
    }
  }
</script>

<style scoped>

</style>
