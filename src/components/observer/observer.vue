<template>
    <div class="observer">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ComponentsObserver',
    props: {
        threshold: {
            type: Number|Array,
            default () {
                return 0
            }
        }
    },
    data() {
        return {observer: null}
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('intersect', true)
            } else {
                this.$emit('intersect', false)
            }
        }, {
            threshold: this.threshold
        });
        this.observer.observe(this.$el)
    },
    deactivated() {
        this.observer.disconnect()
    }
}
</script>
