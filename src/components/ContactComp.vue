<template>
    <div style="width: 100%;">
      <div class="text-h3 text-bold text-center q-mt-xl">Contact</div>

      <div class="row q-mt-xl col-center" style="flex-direction: row;">
        <div class="col-xs-12 col-sm-12 col-md-4 q-py-lg q-px-xl">
            <q-card flat bordered class="border-black q-py-sm" style="min-width: fit-content;">
                <q-card-section class="column flex-center">
                <q-icon name="call" size="60px" />
                <div class="text-h5 q-mt-md text-weight-medium" >(+52) 442 669 6054</div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 q-py-lg q-px-xl">
            <q-card flat bordered class="border-black q-py-sm" style="min-width: fit-content;">
                <q-card-section class="column flex-center">
                <q-icon name="mail" size="60px" />
                <div class="text-h5 q-mt-md text-weight-medium" >brunopaz00@yahoo.com.mx</div>
                </q-card-section>
            </q-card>
        </div>
      </div>
      
    </div>
</template>

<script>
import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'ContactComp',
  })
</script>
