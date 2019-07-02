<template>
    <div class="container-fluid">
        <div class="page-title-bar">
            <div class="page-title-bar-overlay" />
            <div class="page-title-bar-inner">
                <div class="container">
                    <div class="row row-xs-center">
                        <div class="col-md-12">
                            <div class="page-title-bar-heading">
                                <h1 class="heading">
                                    Blog YQY
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="page-main-content col-lg-8">
                        <article
                            class="post-detail"
                            v-if="article.title"
                        >
                            <div class="post-feature">
                                <div class="post-feature post-thumbnail">
                                    <img
                                        src="http://abby.zooka.io/wp-content/uploads/2018/04/blog-06-770x516.jpg"
                                        alt="Irresistible Appetizer Recipes"
                                    >
                                </div>
                            </div>

                            <div class="post-inner">
                                <div class="entry-header">
                                    <h6 class="post-categories">
                                        <router-link
                                            to="/"
                                            rel="category tag"
                                        >
                                            {{ article.category.name }}
                                        </router-link>
                                    </h6>
                                    <h1 class="entry-title">
                                        {{ article.title }}
                                    </h1>
                                    <div class="post-meta">
                                        <div class="post-date secondary-font">
                                            {{ article.updated_at }}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="entry-content"
                                    v-html="article.body"
                                />

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="entry-footer">
                                            <div class="row row-xs-center">
                                                <div class="col-md">
                                                    <div class="post-tags">
                                                        <h6>Tags </h6>
                                                        <router-link
                                                            to="/"
                                                            rel="tag"
                                                        >
                                                            kitchen
                                                        </router-link>
                                                        <router-link
                                                            to="/"
                                                            rel="tag"
                                                        >
                                                            photography
                                                        </router-link>
                                                        <router-link
                                                            to="/"
                                                            rel="tag"
                                                        >
                                                            tips
                                                        </router-link>
                                                        <router-link
                                                            to="/"
                                                            rel="tag"
                                                        >
                                                            travel
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="page-sidebar col-lg-4 page-sidebar-right">
                        <div class="page-sidebar-inner">
                            <div class="page-sidebar-content">
                                <div
                                    id="search-2"
                                    class="widget_search"
                                >
                                    <form
                                        role="search"
                                        method="get"
                                        class="search-form"
                                        action="http://abby.zooka.io/"
                                    >
                                        <label>
                                            <span class="screen-reader-text">Search for:</span>
                                            <input
                                                type="search"
                                                class="search-field"
                                                placeholder="Search..."
                                                value=""
                                                name="k"
                                                title="Search for:"
                                            >
                                        </label>
                                        <button
                                            type="submit"
                                            class="search-submit"
                                        >
                                            <font-icon icon="search" />
                                        </button>
                                    </form>
                                </div>
                                <div
                                    id="tm-posts-widget-2"
                                    class="widget tm-posts-widget"
                                >
                                    <h2 class="widget-title">
                                        Featured posts
                                    </h2>
                                    <div class="tm-posts-widget-wrapper">
                                        <div class="post-item">
                                            <div class="post-widget-thumbnail">
                                                <router-link
                                                    to="/"
                                                    title="Irresistible Appetizer Recipes"
                                                >
                                                    <img
                                                        src="http://abby.zooka.io/wp-content/uploads/2018/04/blog-06-80x80.jpg"
                                                        alt="Irresistible Appetizer Recipes"
                                                    >
                                                </router-link>
                                            </div>
                                            <div class="post-widget-info">
                                                <h5 class="post-widget-title">
                                                    <router-link
                                                        to="/"
                                                        title="Irresistible Appetizer Recipes"
                                                    >
                                                        Irresistible Appetizer Recipes
                                                    </router-link>
                                                </h5>
                                                <span class="post-date secondary-font">May 25, 2018</span>
                                            </div>
                                        </div>
                                        <div class="post-item">
                                            <div class="post-widget-thumbnail">
                                                <router-link
                                                    to="/"
                                                    title="Irresistible Appetizer Recipes"
                                                >
                                                    <img
                                                        src="http://abby.zooka.io/wp-content/uploads/2018/04/blog-06-80x80.jpg"
                                                        alt="Irresistible Appetizer Recipes"
                                                    >
                                                </router-link>
                                            </div>
                                            <div class="post-widget-info">
                                                <h5 class="post-widget-title">
                                                    <router-link
                                                        to="/"
                                                        title="Irresistible Appetizer Recipes"
                                                    >
                                                        Irresistible Appetizer Recipes
                                                    </router-link>
                                                </h5>
                                                <span class="post-date secondary-font">May 25, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Topic } from '@/api'

export default {
    name: 'BlogShow',
    data() {
        return {
            article: {}
        }
    },
    async mounted() {
        let res = await this.getData();
        this.article = res.data;
    },
    methods: {
        async getData() {
            if ('id' in this.$route.params) {
                let res = await Topic.topicsShow(this.$route.params.id);
                return res.data;
            }
            return {}
        }
    },
}
</script>

<style lang="scss" scoped>
    .entry-title{
        font-weight: 700;
        font-size: 36px;
        line-height: 1.3;
        border-bottom: 1px dashed #c0c0c0;
        padding-bottom: 15px;
        margin-bottom: 15px;
        color: #333;
    }
    .entry-content{
        margin-bottom: 35px;
    }
    .entry-footer {
        padding: 25px 0;
        border-top: 1px dashed #c0c0c0;
    }
    .post-tags{
        h6{
            display: inline-block;
            margin-right: 20px;
            font-weight: 700;
            font-size: 18px;
            color: #333;
        }
        a {
            display: inline-block;
            padding: 3px 0;
            color: inherit;
            margin-right: 20px;
        }
    }
</style>
