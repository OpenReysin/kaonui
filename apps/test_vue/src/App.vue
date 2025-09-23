<template>
  <div class="app">
    <header class="header">
      <h1>KaonUI Test App</h1>
      <p>Testing Vue components wrapping Lit elements</p>
    </header>

    <main class="main">
      <section class="section">
        <h2>Button Components</h2>
        <div class="button-group">
          <kaon-button @click="handleClick">Primary Button</kaon-button>
          <kaon-button variant="secondary" @click="handleClick">Secondary Button</kaon-button>
          <kaon-button variant="danger" @click="handleClick">Danger Button</kaon-button>
          <kaon-button disabled>Disabled Button</kaon-button>
        </div>
      </section>

      <section class="section">
        <h2>Card Components</h2>
        <div class="card-grid">
          <KaonCard title="Basic Card">
            <p>This is a basic card with a title and some content.</p>
            <template #footer>
              <kaon-button variant="primary">Action</kaon-button>
            </template>
          </KaonCard>

          <KaonCard>
            <h3>No Title Card</h3>
            <p>This card doesn't have a title prop, so the header is not rendered.</p>
            <template #footer>
              <span>Custom footer content</span>
            </template>
          </KaonCard>

          <KaonCard title="Interactive Card">
            <p>Click count: {{ clickCount }}</p>
            <kaon-button @click="incrementCount">Increment</kaon-button>
            <template #footer>
              <kaon-button variant="secondary" @click="resetCount">Reset</kaon-button>
            </template>
          </KaonCard>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const clickCount = ref(0);

const _handleClick = (event: Event) => {
	console.log("Button clicked:", event);
};

const _incrementCount = () => {
	clickCount.value++;
};

const _resetCount = () => {
	clickCount.value = 0;
};
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.header h1 {
  margin: 0 0 10px 0;
  color: #333;
}

.header p {
  margin: 0;
  color: #666;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>