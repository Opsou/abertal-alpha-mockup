<template>
  <div>
    <div class="my-1 row">
      <div class="col-6">
        <b-form-fieldset horizontal label="Rol" :label-cols="6">
          <b-form-select
            :options="[{text:'Destinatario', value:1}, {text:'Voluntario', value:2}, {text:'Tutor', value:3 }, {text:'Colaborador', value:4}]"
            v-model="role">
          </b-form-select>
        </b-form-fieldset>
      </div>
      <div class="col-6">
        <b-form-fieldset horizontal>
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>

    <!-- Main table element -->
    <b-table striped hover
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="5"
             :filter="filter"
    >
      <template slot="name" scope="item">
        {{item.value.first}} {{item.value.last}}
      </template>
      <template slot="isActive" scope="item">
        {{item.value ? 'Yes :)' : 'No :('}}
      </template>
      <template slot="actions" scope="item">
        <b-btn size="sm" @click="details(item.item)">Details</b-btn>
      </template>
    </b-table>

    <div class="justify-content-center my-1">
      <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage"/>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'people',
    data () {
      return {
        items: [
          {
            isActive: true,
            age: 40,
            name: {
              first: 'Dickerson',
              last: 'Macdonald'
            }
          }, {
            isActive: false,
            age: 21,
            name: {
              first: 'Larsen', last: 'Shaw'
            }
          }, {
            _rowVariant: 'success',
            isActive: false,
            age: 9,
            name: {
              first: 'Mitzi',
              last: 'Navarro'
            }
          }
        ],
        fields: {
          name: {
            label: 'Person Full name',
            sortable: true
          },
          age: {
            label: 'Person age',
            sortable: true
          },
          isActive: {
            label: 'is Active'
          },
          actions: {
            label: 'Actions'
          }
        },
        currentPage: 1,
        perPage: 5,
        filter: null
      }
    },
    methods: {
      details (item) {
        alert(JSON.stringify(item))
      }
    }
  }
</script>
