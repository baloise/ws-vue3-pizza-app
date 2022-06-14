<script setup lang="ts">
import PizzaContainer from '@/ui/components/pizza/PizzaContainer.vue'
import CartContainer from '@/ui/components/cart/CartContainer.vue'
</script>

<template>
  <div class="columns my-4">
    <div class="column is-8">
      <PizzaContainer></PizzaContainer>
    </div>
    <div class="column is-4">
      <CartContainer></CartContainer>
    </div>
  </div>
</template>
