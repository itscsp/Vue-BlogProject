<template>
  <div class="home">

    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post='post' v-for="(post,index) in sampleBlogPost" :key="index" />

    <!-- cards-->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Vue More Recent Blogs</h3>
        <div class="blog-cards">
            <BlogCard :post='post' v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <!-- cards ends-->

    <div class="update">
      <div class="container">
        <h2> Never miss a post, Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for FireBlog <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
import BlogCard from '../components/BlogCard'
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {BlogPost, BlogCard, Arrow },
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
      ],

      sampleBlogCards: [
        {blogTitle: "Blog Card #1", blogCoverPhoto:"stock-1", blogDate:"may 1, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto:"stock-2", blogDate:"may 1, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto:"stock-3", blogDate:"may 1, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto:"stock-4", blogDate:"may 1, 2021"},
      ],


    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}


.update{
  .container {
    padding: 100px 25px;
    display: flex;
    justify-content:space-around;
    flex-direction: column;
    align-items: center;
    @media (min-width:800px){
      padding:125px 25px;
      flex-direction: row;
    }
  }

  .router-bottom {
    display: flex;
    font-size: 14px;
    text-decoration: none;
    @media (min-width:800px){
      margin-left:auto;

    }
  }

  h2{
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width:100%;
    text-align: center;
    text-transform: uppercase;
    @media (min-width:800px){
      text-align: initial;
      font-size: 40px;
    }
  }
}
</style>

