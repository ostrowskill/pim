<template>
    <div class="profile-card f-wrap">
        <div class="profile-picture" :class="{'align-item': miniNav}"></div>
        <ul class="profile-info" :class="{'hide': miniNav}">
            <li class="item name">John Doe</li>
            <li class="item description">Lorem ipsum dolor sit.</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['miniNav']
}
</script>

<style lang="scss" scoped>
@import './profile-card.scss';
</style>

