<template>
    <div style="width: 100%;">
      <div class="text-h3 text-bold text-center">Portfolio</div>

      <div class="row" style="width: 100%;">
        <div id="parent" class="fit row wrap justify-around items-start content-start" style="overflow: hidden;">

          <div class="q-mt-md" style="overflow: auto;">
            <q-card flat bordered >
              <q-card-section >
                <q-img
                  src="../../public/bolsa_uaq.svg"
                  class="image"
                  fit="contain"
                />
                <div class="text-h4 text-bold q-mt-sm">Bolsa Uaq</div>
                <div class="text-subtitle1">Website</div>
                <div class="text-subtitle1">Rest API</div>
                <a style="color: #0038FF;" target="_blank" href="https://bolsa.fif-uaq.mx" class="my-custom-link">https://bolsa.fif-uaq.mx</a>
              </q-card-section>
              <q-card-section >
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


          <div  class="q-mt-md" style="overflow: auto;">
            <q-card flat bordered >
              <q-card-section >
                <div>
                  <q-img
                    src="../../public/indereq_web.svg"
                    class="image"
                    fit="contain"
                  />
                  <q-img
                    src="../../public/indereq_mobile.svg"
                    class="mobile-image"
                    fit="contain"
                  />
                </div>
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


          <div class="q-mt-md" style="overflow: auto;">
            <q-card flat bordered >
              <q-card-section >
                <div>
                  <q-img
                    src="../../public/cosecha_login.svg"
                    class="mobile-image"
                    fit="contain"
                  />
                  <q-img
                    src="../../public/cosecha_reparto.svg"
                    class="mobile-image"
                    fit="contain"
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


          <div class="q-mt-md" style="overflow: auto;">
            <q-card flat bordered >
              <q-card-section >
                <div>
                  <q-img
                    src="../../public/indereq_web.svg"
                    class="image"
                    fit="contain"
                  />
                  <q-img
                    src="../../public/indereq_mobile.svg"
                    class="mobile-image"
                    fit="contain"
                  />
                </div>
                <div class="text-h4 text-bold q-mt-sm">Agenda UAQ</div>
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

.image{
  width: 650px;
  height: 300px;
}

.mobile-image{
  width: 150px;
  height: 300px;
}

</style>