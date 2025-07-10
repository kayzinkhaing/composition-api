import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    // console.log(response);
    try {
      // await new Promise((resolve,reject)=>{
      //     // resolve();
      //     setTimeout(resolve,2000)
      // })
      // let response=await fetch("http://localhost:3000/posts")
      //   // console.log(response);
      //   if(response.status===404){
      //     throw new Error("not found url");
      //   }
      //   let datas=await response.json();
      //   posts.value=datas;
      // console.log(datas);

      // ✅ Firestore modular syntax (v9+)
      let res = await getDocs(collection(db, "posts"));
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });

      // console.log(res.docs);
    } catch (err) {
      // console.log(error.message)
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
