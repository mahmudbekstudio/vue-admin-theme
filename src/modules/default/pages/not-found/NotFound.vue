<template>
    <div class="page-not-found">
        <div class="not-found-icon"><v-icon>cancel</v-icon></div>
        <h1>Not Found</h1>
    </div>
</template>
<script>
    import mixins from '@/mixins';

    export default {
        data() {
            return {
                currentLayout: 'Centered'
            }
        },
        mixins: [mixins.get('changeLayout')]
    }
</script>
<style scoped lang="scss">
    .page-not-found {
        text-align: center;
    }
    .not-found-icon {
        .v-icon {
            font-size: 50px;
        }
    }
</style>