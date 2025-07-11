<template>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" required v-model="title" />
  
    <label>Body</label>
    <textarea required v-model="body"></textarea>
  
    <label>Tags (hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" placeholder="Type and press Enter" />
  
    <div class="tag-container">
      <div v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
      </div>
    </div>
  
    <button type="submit">Add Post</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db,timestamp  } from '@/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default {
  setup() {
    let router= useRouter();//this.$router
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);

    const handleKeydown = () => {
      const trimmedTag = tag.value.trim();
      if (trimmedTag && !tags.value.includes(trimmedTag)) {
        tags.value.push(trimmedTag);
      }
      tag.value = '';
    };

    const addPost = async () => {
      const postData = {
        title: title.value,
        body: body.value,
        tags: tags.value,
    created_at:serverTimestamp()

      };
       let res = await addDoc(collection(db, "posts"), postData);
      //  console.log(res);
      // try {
      //   const response = await fetch('http://localhost:3000/posts', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(postData),
      //   });

      //   if (!response.ok) {
      //     throw new Error(`Server error: ${response.statusText}`);
      //   }

      //   const result = await response.json();
      //   console.log('Post added:', result);

      //   // Clear form
      //   title.value = '';
      //   body.value = '';
      //   tag.value = '';
      //   tags.value = [];
      //   // alert('Post added successfully!');

        router.push("/");
      // } catch (error) {
      //   console.error('Error adding post:', error);
      //   alert('Failed to add post. Check console for details.');
      // }
    };

    return { title,body,tag,tags,handleKeydown,addPost };
  },
};
</script>

<style scoped>
form {
  max-width: 550px;
  margin: 60px auto; 
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

input[type='text'],
textarea {
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  transition: border 0.2s;
  box-sizing: border-box;
  font-family: inherit;
}

input[type='text']:focus,
textarea:focus {
  border-color: #409eff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.pill {
  background-color: #e0f0ff;
  color: #007acc;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.2s;
}

button {
  padding: 12px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1f78d1;
}
</style>
