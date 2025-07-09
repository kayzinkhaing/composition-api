<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length>0">
      <PostLists :posts="posts"></PostLists>

    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
   
  </div>
</template>
<script>

import Spinner from '../components/Spinner'
import PostLists from '../components/PostLists'
import getPosts from '../composables/getPosts';  

export default {
  components: {
    Spinner, PostLists },
  setup(){
    //composable function
    let {posts,error,load}=getPosts()
    load();
    return {posts,error};
  }
}
</script>