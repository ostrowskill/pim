<template>
    <nav class="filter-nav">
        <domain-drop-down />
    </nav>
</template>

<script>
import domainDropDown from './domain-dropdown/domain-dd.vue';
export default {
    components: {
        domainDropDown
    }
}
</script>

<style lang="scss" scoped>
@import './filter-nav.scss';
</style>


