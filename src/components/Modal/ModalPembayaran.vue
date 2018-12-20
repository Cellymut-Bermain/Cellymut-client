<template>
  <q-modal style="width: 100%" v-model="modalPembayaran" ref="modalRef">
    <q-modal-layout style="width: 100%">
      <q-toolbar slot="header">
        <q-toolbar-title>
          Transfer ke BCA
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          v-close-overlay
          icon="clear"
        />
      </q-toolbar>
      <q-card>
        <q-card-main class="color2">
          <p>Harap di transfer ke </p>
          <p>Bank BCA : 783 019 8703</p>
          <p>a/n Mariana Trinaga</p>
        </q-card-main>
        <q-card-main class="color2">
          <p>
            Setelah pembayaran dilakukan, admin akan mengkonfirmasi melalui pesan Whatsapp.
          </p>
          <p>
            Informasi Bank dapat dilihat kembali di pesanan saya
          </p>
          <p>Terima Kasih</p>
        </q-card-main>
      </q-card>
    </q-modal-layout>
  </q-modal>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    modalPembayaran : {
      get () {
        return this.$store.state.modalPembayaran
      },
      set (value) {
        this.$store.commit('setModalPembayaran', value)
      }
    }
  }
}
</script>

