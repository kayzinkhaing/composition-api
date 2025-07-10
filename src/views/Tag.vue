<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
        <div>
          <PostLists :posts="filteredPosts"></PostLists>
        </div>
        <div>
            <TagCloud :posts="posts"></TagCloud>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
    </div>
</template>
<script>
import getPosts from '@/composables/getPosts'
import PostLists from '@/components/PostLists.vue'
import TagCloud from '@/components/TagCloud.vue' // ✅ Add this

import { computed } from 'vue'

export default {
  components: {
    PostLists,
    TagCloud // ✅ Register here
  },
  props: ['tag'],
  setup(props) {
    const { posts, error, load } = getPosts()
    load()

    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags?.includes(props.tag))
    })

    return { posts, error, load, filteredPosts }
  }
}
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>