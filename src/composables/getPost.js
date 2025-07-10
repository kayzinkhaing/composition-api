import { ref } from "vue";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      // await new Promise((resolve, reject) => {
      //     setTimeout(resolve, 2000)
      // })
      // let response = await fetch('http://localhost:3000/posts/' + id);
      // if (response.status === 404) {
      //   throw new Error("not found that exact url");
      // }
      // let data = await response.json();
      // post.value = data;

      // ✅ Correct way to get a single document by ID
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("That post does not exist");
      }

      post.value = { ...docSnap.data(), id: docSnap.id };

    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
