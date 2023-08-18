<template>
    <div style="width: 100%;">
      <div class="text-h3 text-bold text-center q-mt-lg">Portfolio</div>

      <div class="row q-mt-lg" >
        <div class="col-xs-12 col-sm-12 col-md-6 q-px-xl q-py-sm">
          <q-card flat bordered >
              <q-card-section>
                  <q-img
                    src="bolsa_uaq.jpg"
                  />
                <div class="text-h4 text-bold q-mt-sm">Bolsa Uaq</div>
                <div class="text-subtitle1">Website</div>
                <div class="text-subtitle1">Rest API</div>
                <a style="color: #0038FF;" target="_blank" href="https://bolsa.fif-uaq.mx" class="my-custom-link">https://bolsa.fif-uaq.mx</a>
              </q-card-section>
              <q-card-section style="margin-top: 26px;">
                <q-separator class="q-mt-sm"></q-separator>
                <div class="flex q-gutter-md q-my-sm">
                  <div class="gray-circle q-pa-sm">VueJs</div>
                  <div class="gray-circle q-pa-sm">Quasar</div>
                  <div class="gray-circle q-pa-sm">ExpressJs</div>
                  <div class="gray-circle q-pa-sm">MySQL</div>
                  <div class="gray-circle q-pa-sm">Sequelize</div>
                  <div class="gray-circle q-pa-sm">MVC</div>
                </div>
              </q-card-section>
            </q-card>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 q-px-xl q-py-sm">
          <q-card flat bordered>
              <q-card-section >
                <q-img
                  src="indereq_web.jpg"
                />
                <div class="text-h4 text-bold q-mt-sm">Indereq</div>
                <div class="text-subtitle1">Website</div>
                <div class="text-subtitle1">Rest API</div>
                <div class="text-subtitle1">Native IOS/Android mobile app</div>
                <a style="color: #0038FF;" target="_blank" href="https://indirec-web.vercel.app" class="my-custom-link">https://indirec-web.vercel.app</a>
              </q-card-section>
              <q-card-section >
                <q-separator class="q-mt-sm"></q-separator>
                <div class="flex q-gutter-md q-my-sm">
                  <div class="gray-circle q-pa-sm">React</div>
                  <div class="gray-circle q-pa-sm">React Native</div>
                  <div class="gray-circle q-pa-sm">Feathers</div>
                  <div class="gray-circle q-pa-sm">ExpressJs</div>
                  <div class="gray-circle q-pa-sm">MySQL</div>
                  <div class="gray-circle q-pa-sm">Sequelize</div>
                  <div class="gray-circle q-pa-sm">MVC</div>
                  <div class="gray-circle q-pa-sm">AWS</div>
                </div>
              </q-card-section>
            </q-card>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 q-px-xl q-py-xl">
          <q-card flat bordered>
              <q-card-section >
                <div style="width: 100%;height: 500px;display: flex;flex-direction: row;">
                  <q-img
                    src="cosecha_info.jpg"
                    fit="scale-down"
                  />
                  <q-img
                    src="cosecha_grupo.jpg"
                    fit="scale-down"
                  />
                </div>
                <div class="text-h4 text-bold q-mt-sm">Cosecha colectiva</div>
                <div class="text-subtitle1">Native IOS/Android mobile app</div>
                <div class="text-subtitle1">API</div>
                <a style="color: #0038FF;" target="_blank" href="https://indirec-web.vercel.app" class="my-custom-link">https://indirec-web.vercel.app</a>
              </q-card-section>
              <q-card-section >
                <q-separator class="q-mt-sm"></q-separator>
                <div class="flex q-gutter-md q-my-sm">
                  <div class="gray-circle q-pa-sm">React Native</div>
                  <div class="gray-circle q-pa-sm">ExpressJs</div>
                  <div class="gray-circle q-pa-sm">MySQL</div>
                  <div class="gray-circle q-pa-sm">Sequelize</div>
                  <div class="gray-circle q-pa-sm">MVC</div>
                  <div class="gray-circle q-pa-sm">AWS</div>
                  <div class="gray-circle q-pa-sm">TypeScript</div>
                </div>
              </q-card-section>
            </q-card>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 q-px-xl q-py-xl">
          <q-card flat bordered>
              <q-card-section >
                <div style="width: 100%;height: 500px;display: flex;flex-direction: row;">
                  <q-img
                    src="agenda_login.jpg"
                    fit="scale-down"
                  />
                  <q-img
                    src="agenda_noti.jpg"
                    fit="scale-down"
                  />
                </div>

                <div class="text-h4 text-bold q-mt-sm">Agenda UAQ</div>
                <div class="text-subtitle1">Native IOS/Android mobile app</div>
                <a style="color: #0038FF;" target="_blank" href="https://indirec-web.vercel.app" class="my-custom-link">https://indirec-web.vercel.app</a>
              </q-card-section>
              <q-card-section style="margin-top: 26px;">
                <q-separator class="q-mt-sm"></q-separator>
                <div class="flex q-gutter-md q-my-sm">
                  <div class="gray-circle q-pa-sm">React Native</div>
                  <div class="gray-circle q-pa-sm">Push Notifications</div>
                  <div class="gray-circle q-pa-sm">Firebase Cloud Messaging </div>
                </div>
              </q-card-section>
            </q-card>
        </div>

        
      </div>

    </div>

</template>

<script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'PortfolioComp',
  })
</script>
  
<style>

</style>