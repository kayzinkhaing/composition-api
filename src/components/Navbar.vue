<template>
  <header>
    <h1>Bloggy Vue</h1>
    <nav>
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'Create'}">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    padding: 10px;
}
header h1{
    color: #dfdddf;
    font-size: 48px;
}
header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}
header a .router-link-active{
    color: #444;
    font-weight: bold ;
}
</style>