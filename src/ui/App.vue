<script setup lang="ts">
import {
  BalApp,
  BalNavbar,
  BalNavbarBrand,
  BalIcon,
  BalText,
  BalNavbarMenu,
  BalNavbarMenuStart,
  BalFooter,
} from '@baloise/design-system-components-vue'
import { onMounted } from 'vue'
import { useI18nStore } from './stores/i18n.store'

const i18nStore = useI18nStore()

const hideLinks = import.meta.env.MODE === 'e2e'

onMounted(() => i18nStore.init())
</script>

<template>
  <BalApp class="has-sticky-footer has-background">
    <header>
      <BalNavbar>
        <BalNavbarBrand>
          <BalIcon name="logo" inverted size="large" />
          <BalText bold class="ml-2">Mamamia Pizza</BalText>
        </BalNavbarBrand>
        <BalNavbarMenu>
          <BalNavbarMenuStart>
            <router-link to="/" class="navbar-item">
              <BalText>Pizzas</BalText>
            </router-link>
            <router-link to="/checkout" class="navbar-item">
              <BalText>Checkout</BalText>
            </router-link>
          </BalNavbarMenuStart>
        </BalNavbarMenu>
      </BalNavbar>
    </header>
    <main className="container is-fluid">
      <router-view />
    </main>
    <BalFooter :hideLinks="hideLinks"></BalFooter>
  </BalApp>
</template>
