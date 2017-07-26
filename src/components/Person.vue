<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <b-card header="Datos personales" class="mb-4">
          <b-form-input v-model="firstname"
                        type="text"
                        placeholder="Nombre"
          ></b-form-input>

          <b-form-input v-model="lastname"
                        type="text"
                        placeholder="Apellidos"
          ></b-form-input>
          <b-form-input v-model="birthday"
                        type="text"
                        placeholder="Fecha de nacimiento"
          ></b-form-input>

          <b-form-input v-model="DNI"
                        type="text"
                        placeholder="DNI"
          ></b-form-input>
          <b-form-input v-model="sanitary"
                        type="text"
                        placeholder="Nº Tarjeta sanitaria"
          ></b-form-input>
        </b-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <b-card header="Dirección" class="mb-4">
          <b-form-input v-model="address"
                        type="text"
                        placeholder="Dirección"
          ></b-form-input>

          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b-form-input v-model="city"
                            type="text"
                            placeholder="Localidad"
              ></b-form-input>
            </div>
            <div class="col-xs-12 col-sm-4">
              <b-form-input v-model="postalcode"
                            type="text"
                            placeholder="Código Postal"
              ></b-form-input>
            </div>

            <div class="col-xs-12 col-sm-4">
              <b-form-input v-model="country"
                            type="text"
                            placeholder="País"
              ></b-form-input>
            </div>
          </div>
        </b-card>

        <b-card header="Datos de contacto" class="mb-2">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <b-form-input v-model="email"
                            type="email"
                            placeholder="Email"
              ></b-form-input>
            </div>
            <div class="col-xs-12 col-sm-6">
              <b-form-input v-model="phone"
                            type="text"
                            placeholder="Teléfono"
              ></b-form-input>
            </div>
          </div>
        </b-card>
      </div>
    </div>

    <b-card header="Rol/es de la persona" class="mb-2">
      <b-form-fieldset>
        <b-form-checkbox v-model="role" value="target">Destinatario</b-form-checkbox>
        <b-form-checkbox v-model="role" value="volunteer">Voluntario</b-form-checkbox>
        <b-form-checkbox v-model="role" value="tutor">Tutor</b-form-checkbox>
        <b-form-checkbox v-model="role" value="collaborator">Colaborador</b-form-checkbox>
      </b-form-fieldset>
    </b-card>

    <b-card header="Destinatario" class="mb-2" v-show="role.includes('target')">
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <label class="control-label">Tipo</label>
          <b-form-select v-model="target.type" :options="{0: '-------','child': 'Infantil', 'juvenile': 'Juvenil'}" class="mb-3">
          </b-form-select>
        </div>
        <div class="col-xs-12 col-sm-3">
          <label class="control-label">Estudios</label>
          <b-form-select v-model="target.studyLevel" :options="{0: '-------','child': 'Infantil', 'juvenile': 'Juvenil'}" class="mb-3">
          </b-form-select>
        </div>
        <div class="col-xs-12 col-sm-3">
          <label class="control-label">Centro de Estudios</label>
          <b-form-input  v-model="target.studyCenter"
          ></b-form-input>
        </div>
        <div class="col-xs-12 col-sm-3">
          <label class="control-label">Hermanos</label>
          <b-form-input v-model="target.studyCenter"
          ></b-form-input>
        </div>
      </div>
    </b-card>

    <b-card header="Volunteer info" class="mb-2" v-show="role.includes('volunteer')">
      <label class="control-label">Fecha de emisión del Certificado de Delitos de Naturaleza Sexual</label>
      <b-form-input v-model="volunteer.certdate"
                    type="date"
                    placeholder="Fecha de emisión del Certificado de Delitos de Naturaleza Sexual"
      ></b-form-input>
    </b-card>


    <b-card header="Observations" class="mb-2">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <b-form-input textarea rows="6" v-model="medical"
                        placeholder="Observaciones médicas"
          ></b-form-input>
        </div>
        <div class="col-xs-12 col-sm-6">
          <b-form-input textarea rows="6" v-model="observations"
                        placeholder="Observaciones generales"
          ></b-form-input>
        </div>
      </div>
    </b-card>


  </div>
</template>

<script>
  export default {
    name: 'person',
    data () {
      return {
        role: [],
        target: {

        },
        volunteer: {
        }
      }
    }
  }

</script>


