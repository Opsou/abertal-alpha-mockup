<template>
  <div>
    <b-card header="Membresia" class="mb-4">
      <b-form-radio v-model="membershipAction" :options="membershipOptions"></b-form-radio>

      <div v-show="membershipAction == 'new'">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-sm-push-3">
            <label class="control-label">Tipo</label>
            <b-form-select v-model="membership.type" :options="{0: '-------','1': 'Tipo 1', '2': 'Tipo 2'}" class="mb-3">
            </b-form-select>
          </div>
          <div class="col-xs-12 col-sm-3 col-sm-push-3">
            <label class="control-label">Cuota</label>
            <b-form-input v-model="membership.amount"
            ></b-form-input>
          </div>
        </div>
      </div>

      <div v-show="membershipAction == 'search'">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-sm-push-6">
            <label class="control-label">Buscar una membersia existente:</label>
            <b-form-input v-model="membership.amount"
            ></b-form-input>
          </div>
        </div>
      </div>

    </b-card>


  </div>
</template>

<script>
  export default {
    name: 'membership-select',
    data () {
      return {
        membership: {},
        membershipAction: 'new',
        membershipOptions: [
          {
            text: 'Crear nueva membersia',
            value: 'new'
          },
          {
            text: 'Buscar',
            value: 'search'
          }
        ]
      }
    }
  }
</script>




