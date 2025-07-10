<template>
  <div class="tag-cloud">
    <h1>Tag Cloud</h1>
    <div v-for="tag in uniqueTags" :key="tag" class="tag">
      <router-link :to="{ name: 'Tag', params: { tag } }">
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const tags = ref([])

    watchEffect(() => {
      tags.value = [] // reset
      if (Array.isArray(props.posts)) {
        props.posts.forEach((post) => {
          if (Array.isArray(post.tags)) {
            post.tags.forEach((tag) => {
              tags.value.push(tag)
            })
          }
        })
      }
    })

    const uniqueTags = ref([])

    watchEffect(() => {
      uniqueTags.value = tags.value.filter((tag, index, array) => {
        return array.indexOf(tag) === index
      })
    })

    return { uniqueTags }
  }
}
</script>

<style scoped>
.tag-cloud {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.tag-cloud h1 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
}

.tag {
  margin-bottom: 8px;
}

.tag a {
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
}

.tag a:hover {
  color: #080909;
}
</style>
