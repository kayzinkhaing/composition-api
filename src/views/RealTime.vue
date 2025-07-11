<template>
  <div class="wrapper">
    <h1 class="title">Real-Time Posts</h1>
    <div class="posts-grid">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-body">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config';
import { ref, onMounted } from 'vue';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export default {
  setup() {
    const posts = ref([]);

    onMounted(() => {
      const colRef = collection(db, 'posts');
      const q = query(colRef, orderBy('created_at', 'desc'));
      onSnapshot(q, (snap) => {
        posts.value = snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
      });
    });

    return { posts };
  }
}
</script>


<style scoped>
.wrapper {
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-weight: 800;
  font-size: 2.8rem;
  text-align: center;
  color: #222;
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.post-card {
  background: #fff;
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.18),
    0 12px 40px rgba(0, 0, 0, 0.12);
}

.post-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #111;
}

.post-body {
  font-size: 1rem;
  color: #555;
  line-height: 1.55;
  white-space: pre-wrap;
}
</style>
