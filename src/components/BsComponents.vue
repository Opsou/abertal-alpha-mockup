<template>
  <div>
    <h2>
      Form
    </h2>

    <div class="row">
      <div class="col-xs-12 col-sm-3 form-group">
        <label class="control-label">b-form-input</label>
        <b-form-input v-model="text"
                      type="text"
                      label="asdasd"
                      placeholder="Enter your name"
        ></b-form-input>
        <small class="form-text text-muted">We will convert your name to lowercase instantly</small>
      </div>

      <div class="col-xs-12 col-sm-3 form-group">
        <label class="control-label">b-input-group</label>
        <b-input-group left="$" right=".00">
          <b-form-input v-model="text"
                        type="text"
                        label="asdasd"
                        placeholder="Enter your name"
          ></b-form-input>
        </b-input-group>
        <small class="form-text text-muted">We will convert your name to lowercase instantly</small>
      </div>

      <div class="col-xs-12 col-sm-6 form-item">
        <label class="control-label">b-form-input (textarea)</label>
        <b-form-input textarea rows="5" v-model="text" placeholder="Text area mode"></b-form-input>
      </div>
    </div>



    <fieldset class="form-group">
      <legend>Datos personales</legend>
      <span class="fieldset-index">1</span>
      <div class="fieldset-content">
        <div class="row">
          <div class="col-xs-12 col-sm-3 form-group">
            <label class="control-label">b-form-input</label>
            <b-form-input v-model="text"
                          type="text"
                          label="asdasd"
                          placeholder="Enter your name"
            ></b-form-input>
            <small class="form-text text-muted">We will convert your name to lowercase instantly</small>
          </div>

          <div class="col-xs-12 col-sm-3 form-group">
            <label class="control-label">b-input-group</label>
            <b-input-group left="$" right=".00">
              <b-form-input v-model="text"
                            type="text"
                            label="asdasd"
                            placeholder="Enter your name"
              ></b-form-input>
            </b-input-group>
            <small class="form-text text-muted">We will convert your name to lowercase instantly</small>
          </div>

          <div class="col-xs-12 col-sm-6 form-item">
            <label class="control-label">b-form-input (textarea)</label>
            <b-form-input textarea rows="5" v-model="text" placeholder="Text area mode"></b-form-input>
          </div>
        </div>
      </div>
    </fieldset>


    <b-button size="lg" variant="secondary" href="#">
      Añadir otro perfil
    </b-button>

    <b-button size="lg" variant="primary" href="#">
      Guardar
    </b-button>

  </div>
</template>


<script>
  export default {

  }
</script>

<style scoped>
  .row {
    margin-bottom: 30px;
  }
</style>
