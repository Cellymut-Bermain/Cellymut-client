<template>
  <div style="width: 100%">
    <hr>
  <table>
    <tr>
      <th>Image</th>
      <th>Item</th>
      <th>Nomer Pesanan</th>
      <th>Tanggal Pesanan</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Status Pesanan</th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td> <img style="width: 100px; height100px" :src="item.image_src" alt=""> </td>
      <td> {{item.item_name}} </td>
      <td> {{item.nomer_pesanan}} </td>
      <td> {{item.tanggal_pesanan}} </td>
      <td> {{item.price}} </td>
      <td> {{item.quantity}} </td>
      <td> {{item.status_pesanan}} </td>
    </tr>
  </table>
  </div>
</template>

<script>
  import image from '../../assets/assets/pilihan-01.png'
  export default {
    data () {
      return {
        items: [
          {
            item_name : 'Monopoly Cellymut',
            image_src: image,
            nomer_pesanan: 'LX-40309876',
            tanggal_pesanan : '24 December 2018',
            price: 200000,
            quantity: 2,
            status_pesanan : 'Pembayaran Diterima'
          },
          {
            item_name : 'Monopoly Cellymut',
            image_src: image,
            nomer_pesanan: 'LX-40309871',
            tanggal_pesanan : '24 December 2018',
            price: 200000,
            quantity: 2,
            status_pesanan : 'Pembayaran Diterima'
          }
        ]
      }
    }
  }

</script>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 24px;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {background-color: #f2f2f2;}
  hr {
    border:none;
    border-top:1px dotted #f00;
    color:#fff;
    background-color:#fff;
    height:1px;
    width:100%;
  }
</style>
