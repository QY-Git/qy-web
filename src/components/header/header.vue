<template>
    <header class="page-header" :class="{fixed: fixed}">
        <observer @intersect="intersected"></observer>
        <div class="page-header-inner" :class="{animated: fixed, slideInDown: fixed}">
            <div class="container">
                <ul class="nav justify-content-end">
                    <li class="nav-item logo">
                        <router-link to="/">YQY</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import Observer from '@/components/observer/'

export default {
    name: 'ComponentsHeader',
    components: {Observer},
    data() {
        return {
            fixed: false
        }
    },
    methods: {
        intersected(show) {
            this.fixed = show === false ;
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-header{
        position: relative;
        z-index: 9999;
        .page-header-inner{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100%;
        }
        &.fixed > .page-header-inner{
            position: fixed;
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
            background: rgba( 255, 255, 255, 1 );
            a{
                color: #222;
            }
        }
        .container{
            position: relative;
            .nav{
                margin-left: -15px;
                margin-right: -15px;
            }
            a {
                height: 68px;
                line-height: 52px;
                color: #fff;
                &.active{
                    color: #EBA056
                }
            }
            .logo{
                position: absolute;
                left: 0;
                top: 0;
                a{
                    line-height: 68px;
                    font-size: 30px;
                    font-weight: 600;
                }
            }
        }
    }
</style>
