<template>
  <div :class="withSidebar ? 'page-intro--with-sidebar': ''" class="page-intro">
    <h1 class="page-intro__header">{{ title }}</h1>
    <div class="page-intro__flex-wrap">
      <div class="page-intro__copy" v-html="copy"/>
      <div class="page-intro__sidebar">
        <slot name="sidebar"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    title: {
      type: String,
      default: ''
    },
    copy: {
      type: String,
      default: ''
    },
    withSidebar: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.page-intro {
  &__flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  &__copy {
    flex-basis: 100%;
    font-size: 22px;
    line-height: 32px;
  }
  &__sidebar {
    display: none;
  }
  &--with-sidebar {
    .page-intro__copy {
      flex-basis: 55%;
    }
    .page-intro__sidebar {
      display: block;
      flex-basis: 40%;
    }
  }
}
</style>
