<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
        <PostLists :posts="posts"></PostLists>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
   
  </div>
</template>
<script>

import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostLists from '../components/PostLists'
import getPosts from '../composables/getPosts';  

export default {
  components: {
    TagCloud,
    Spinner, PostLists },
  setup(){
    //composable function
    let {posts,error,load}=getPosts()
    load();
    return {posts,error};
  }
}
</script>

<style>

.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>