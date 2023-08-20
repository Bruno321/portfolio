<template>
    <q-page padding>
        <q-btn class="bg-white fixed z-top" icon="keyboard_backspace" style="padding-right: 10px;padding-left: 10px;"/>
      <div class="text-h3 text-bold text-center q-mt-lg">Bolsa Uaq</div>
        
        <div class="row">

          <div class="col-xs-12 col-sm-12 lt-md q-pa-xl">
            <q-img src="bolsa_uaq_validar.png" />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 q-pa-xl">

            <div>
              <div class="text-h4 text-weight-medium">Information</div>
              <div class="text-subtitle1 q-mt-sm">Project Leader</div>
              <div class="text-subtitle1 q-mt-sm">Centro de Desarrollo (link?)</div>
              <div class="text-subtitle1 q-mt-sm">TODO date</div>
            </div>
            
            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Description</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">In this dashboard you can observe the actual state of COVID lights in each canton of Ecuador. Via scraping I determinade the API of the government and I started to extract the information from there.
              If you like you can subscribe with your name and email in the form, and you will receive a notification when some canton changes of state.</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Activities</div>
              <div class="text-subtitle1 q-mt-sm">Manage people i overcome it doing blaba asjafdjiaf asn kf asdao</div>
              <div class="text-subtitle1 q-mt-sm">Manage people i overcome it doing blaba asjafdjiaf asn kf asdao</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Challengues</div>
              <div class="text-subtitle1 q-mt-sm">Manage people i overcome it doing blaba asjafdjiaf asn kf asdao</div>
              <div class="text-subtitle1 q-mt-sm">Manage people i overcome it doing blaba asjafdjiaf asn kf asdao</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Technologies</div>
              <div class="row q-mt-sm q-gutter-md">
                <div class="col-md-1">
                  <q-img src="vue.svg" class="mini-icon"/> 
                  <div>VueJs</div>
                </div>
                <div class="col-md-1">
                  <q-img src="quasar.svg" class="mini-icon"/> 
                  <div>Quasar</div>
                </div>
                <div class="col-md-1">
                  <q-img src="express.svg" class="mini-icon" fit="scale-down"/> 
                  <div>ExpressJs</div>
                </div>
                <div class="col-md-1">
                  <q-img src="mysql.svg" class="mini-icon" fit="scale-down"/> 
                  <div>MySQL</div>
                </div>
                <div class="col-md-1">
                  <q-img src="sequelize.svg" class="mini-icon"/> 
                  <div>Sequelize</div>
                </div>
              
              </div>
            </div>

            <div>
              <q-btn
              no-caps
              color="black"
              label="Visit"
              class="full-width q-py-sm text-h6 q-mt-lg"
              outline
            />
            </div>

          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 gt-sm q-pa-xl">
            <q-img src="bolsa_uaq_validar.png"  />
            <q-img src="bolsa_uaq_info.png" class="q-mt-lg"/>
            <q-img src="bolsa_uaq_empresa.png" class="q-mt-lg"/>
            <q-img src="bolsa_uaq_info2.png" class="q-mt-lg"/>
          </div>

        </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BolsaUaq',

})
</script>
<style>
.mini-icon{
  width: 45px;
  height: 45px;
}
</style>
