<template>
  <div class="post">
    <router-link :to="{ name: 'Detail', params: { id: post.id } }" class="title-link">
      <h2>{{ post.title }}</h2>
    </router-link>

    <p class="body-snippet">{{ cutPostBody }}</p>

    <div class="tag-container">
      <div v-for="tag in post.tags" :key="tag" class="tag-pill">
        <!-- {{ tag }} -->
          <router-link :to="{name:'Tag',params:{tag}}">
            {{ tag }}
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    const cutPostBody = computed(() => {
      return props.post.body.substring(0, 100) + '...';
    });
    return { cutPostBody };
  }
};
</script>

<style scoped>
.post {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 20px 0;
  transition: box-shadow 0.3s ease;
}

.post:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.title-link {
  text-decoration: none;
  color: #1f78d1;
}

.title-link h2 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: 600;
}

.body-snippet {
  color: #555;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 12px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-pill {
  background-color: #e0f0ff;
  color: #007acc;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.2s;
}
</style>
