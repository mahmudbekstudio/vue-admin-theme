<template>
    <div class="empty-layout">
        <slot name="header"></slot>
        <v-content>
            <slot></slot>
        </v-content>
        <slot name="footer"></slot>
    </div>
</template>
<script>
    export default {
        //
    }
</script>
<style scoped lang="scss">
    .empty-layout {
        height: 100%;
        .v-content {
            height: 100%;
        }
    }
</style>