<template>
  <div>
    <label class="control-label">Filtar por tipo</label>
    <b-form-select v-model="membership.type" :options="{0: '-------','1': 'Tipo 1', '2': 'Tipo 2'}" class="mb-3">
    </b-form-select>

    <div class="row">
      <membership-teaser class="col-xs-12 col-sm-3" v-for="m in memberships"></membership-teaser>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'memberships',
    data () {
      return {
        membership: {},
        memberships: [1, 2, 3, 4, 5, 6]
      }
    }
  }
</script>
