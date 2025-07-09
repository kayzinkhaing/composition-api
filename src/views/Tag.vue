<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <!-- {{ filteredPosts }} -->
          <PostLists :posts="filteredPosts"></PostLists>

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import PostLists from '@/components/PostLists.vue'

import { computed } from 'vue';
export default {
     components: {
            PostLists
        },
    props:["tag"],
    setup(props){
        // console.log(props.tag)
        let {posts,error,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags?.includes(props.tag)
            })
        })
        return {posts,error,load,filteredPosts}
    }
}
</script>