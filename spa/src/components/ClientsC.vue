<template>
  <div class="mb-5">
    <h1>Llista de clients</h1>
    <br />
    <h3>Des del component</h3>
    <br />
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
    <div>
      <div v-for='item of clients' :key="item.id" class="client mb-4 mt-4">
        <h3>Client: {{item}}</h3>
        <router-link :to="{name: 'Client', params: {name:item}}">
            <button class="btn btn-primary">Mostra informació del client</button>
        </router-link>
    </div>
    </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Clients',
    data(){
        return{
            clients:['Client 1','Client 2','Client 3','Client 4']
        }
    }
};
</script>
