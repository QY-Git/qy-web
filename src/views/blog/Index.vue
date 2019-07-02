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
                        <article class="post-list">
                            <div
                                v-for="(row, i) in lists"
                                :key="i"
                                class="post-item"
                            >
                                <div class="post-wrapper">
                                    <div class="post-feature post-thumbnail">
                                        <router-link
                                            :to="{name: 'BlogShow', params:{id: row.id}}"
                                            :title="row.title"
                                        >
                                            <img
                                                src="http://abby.zooka.io/wp-content/uploads/2018/04/blog-06-270x390.jpg"
                                                :alt="row.title"
                                            >
                                        </router-link>
                                    </div>
                                    <div class="post-info">
                                        <h3 class="post-categories">
                                            <router-link
                                                to="/"
                                                rel="category tag"
                                            >
                                                {{ row.category.name }}
                                            </router-link>
                                        </h3>
                                        <h3 class="post-title">
                                            <router-link
                                                :to="{name: 'BlogShow', params:{id: row.id}}"
                                                :title="row.title"
                                            >
                                                {{ row.title }}
                                            </router-link>
                                        </h3>
                                        <div class="post-meta">
                                            <div class="post-date secondary-font">
                                                {{ row.updated_at }}
                                            </div>
                                        </div>
                                        <div class="post-excerpt">
                                            <p>{{ row.body }}</p>
                                        </div>
                                        <div class="post-read-more">
                                            <router-link :to="{name: 'BlogShow', params:{id: row.id}}">
                                                <span
                                                    class="btn-text"
                                                    data-hover="Read more"
                                                >Read more</span>
                                            </router-link>
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
    name: 'BlogIndex',
    data() {
        return {
            lists: []
        }
    },
    async mounted() {
        let res = await this.getData();
        this.lists = res.data;
    },
    methods: {
        async getData() {
            let res = await Topic.topicsIndex();
            return res.data;
        }
    },
}
</script>

<style lang="scss" scoped>
    .post-wrapper{
        border: 1px solid #eee;
        border-bottom: 3px solid #EBA056;
        overflow: hidden;
        background: #fff;
        display: flex;
        align-items: center;
        &:hover .post-thumbnail img{
            transform: scale(1.2);
        }
        .post-thumbnail {
            flex-shrink: 0;
            overflow: hidden;
            img{
                transition: all 1s cubic-bezier(0, 0, 0.2, 1);
                width: 270px;
            }
        }
        .post-info {
            padding: 40px 30px;
            .post-read-more {
                overflow: hidden;
                a{
                    color: #EBA056;
                    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                    .btn-text{
                        display: inline-block;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        position: relative;
                        transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
                        &:hover {
                            transform: translateY(-100%);
                        }
                        &::after{
                            position: absolute;
                            left: 0;
                            top: 100%;
                            content: attr(data-hover);
                            transform: translate3d(0, 0, 0);
                            color: inherit;
                        }
                    }
                }
            }
        }
    }
</style>
