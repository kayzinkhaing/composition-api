<template>
  <div v-if="post" class="post">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ post.body }}</p>
  </div>
  <div v-else class="loading-container">
    <Spinner />
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router';

export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    let route =useRoute();
    console.log(route.params.id);
    const { post, error, load } = getPost(route.params.id)
    load()
    return { post, error }
  }
}
</script>


<style>
.post {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 24px;
  margin: 32px auto;
  max-width: 700px;
  transition: box-shadow 0.3s ease;
}

.post:hover {
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.post-body {
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

</style>