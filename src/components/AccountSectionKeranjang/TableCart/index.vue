<template>
  <q-table
    :columns="columns"
    row-key="name"
    color="secondary"
    title="Your Cart"
    :pagination.sync="pagination"
  >
    <q-tr slot="body" slot-scope="props" :props="props">
      <q-td key="username" :props="props" >
        <div class="row items-center justify-between no-wrap">
          <div> Hellow </div>
        </div>
      </q-td>
    </q-tr>

  </q-table>
</template>

<script>
  import axios from 'axios'
  import {api} from "../../../config";
  const token = localStorage.getItem('token')
  export default {
    data () {
      return {
        columns: [
          { name: 'username', label: 'Username', field: 'username',
            align: 'left', sortable: true },
          { name: 'role_admin', label: 'Role Admin', field: 'role_admin',
            align: 'left', sortable: true },
          { name: 'createdAt', label: 'Create At', field: 'createdAt',
            align: 'left', sortable: true },
          { name: 'updatedAt', label: 'Updated At', field: 'updatedAt',
            align: 'left', sortable: true },
          { name: 'actions', label: 'Actions', field: 'actions',
            align: 'left'},
        ],
        pagination: {
          sortBy: null, // String, column "name" property value
          descending: false,
          page: 1,
          rowsPerPage: 100 // current rows per page being displayed
        },
      }
    },
    methods: {
      fetchingCart () {
        axios.get(api+'carts', {
          headers: {
            token
          }
        })
          .then(({data}) => {
            console.log(data.carts)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    mounted () {
      this.fetchingCart()
    }
  }
</script>
