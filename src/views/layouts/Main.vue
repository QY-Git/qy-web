<template>
    <div class="wrapper">
        <main-header />
        <div class="content-wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutsMain'
}
</script>

<style lang="scss">
    @import '../../assets/scss/main.scss';
</style>
<style lang="scss" scoped>
    .animated.v-leave-active{
        position: absolute;
        width:100%;
    }
</style>
