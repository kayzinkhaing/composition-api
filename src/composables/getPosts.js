import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      // await new Promise((resolve,reject)=>{
      //     setTimeout(resolve,2000)
      // })
      // let response = await fetch("http://localhost:3000/posts")
      // if(response.status === 404){
      //   throw new Error("not found url");
      // }
      // let datas = await response.json();
      // posts.value = datas;

      // ✅ Firestore v9+ modular syntax with ordering
      let postQuery = query(collection(db, "posts"), orderBy("created_at", "desc"));
      let res = await getDocs(postQuery);
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });

    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
