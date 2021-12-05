<template>
  <div class="home">

    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post='post' v-for="(post,index) in sampleBlogPost" :key="index" />

  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
export default {
  name: "Home",
  components: {BlogPost},
  data(){
    return{
      welcomeScreen: {
        title:"Welcome",
        blogPost:
        "Weekly blog articles with all things programing including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo:'coding',
      },

      sampleBlogPost: [
        {
          title:'This is a Filter Title',
          blogHTML: 'This is a filter blog post title',
          blogContentPhoto:'beautiful-stories',
        },
        {
          title:'This is a Filter Title',
          blogHTML: 'This is a filter blog post title',
          blogContentPhoto:'designed-for-everyone',
        }
      ]

    }
  }
};
</script>
