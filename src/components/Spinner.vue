<template>
  <div class="spin">Loading...</div>
</template>

<script>
export default {

}
</script>

<style>
.spin {
  width: 40px;
  height: 40px;
  border: 3px solid red;
  border-radius: 50%;
  margin: 30px auto;
  border-top-color: transparent; /* Make top border transparent for visible spin */
  animation: spin 1s linear infinite; /* Add 'linear' */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
