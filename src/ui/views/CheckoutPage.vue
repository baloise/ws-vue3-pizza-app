<script setup lang="ts">
import CheckoutContainer from '@/ui/components/checkout/CheckoutContainer.vue'
import CartContainer from '@/ui/components/cart/CartContainer.vue'
</script>

<template>
  <div class="columns my-4">
    <div class="column is-8">
      <CheckoutContainer></CheckoutContainer>
    </div>
    <div class="column is-4">
      <CartContainer readonly></CartContainer>
    </div>
  </div>
</template>
