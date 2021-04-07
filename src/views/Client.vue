<template>
  <div class="client">
    <h1>This is the client details page</h1>
    <p>Name: {{ $route.params.name }}</p>
    <p>Details: {{ $route.params.details }}</p>
    <p>Back to client list btn</p>
    <router-link
      :to="{
        name: 'Clients',
      }"
    >
      <button class="client-btn">Back to client list btn</button>
    </router-link>
  </div>
</template>

<script></script>
