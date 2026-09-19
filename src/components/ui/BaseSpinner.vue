<template>
  <span class="material-symbols-outlined spinner"> progress_activity </span>
</template>

<style scoped>
.spinner {
  font-size: 4rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
