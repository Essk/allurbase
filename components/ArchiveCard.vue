<template>
  <b-media class="aub-card archive-card" right-align vertical-align="top">
    <div class="archive-card__header">
      <nuxt-link :to="detailSlug + '/' + id" class>
        <h2 class="mt-0">{{ title }}</h2>
      </nuxt-link>
      <div class="archive-card__subheader">
        <slot name="card-subheader"/>
      </div>
    </div>

    <div class="archive-card__content-wrap">
      <div class="archive-card__content" v-html="content"/>
      <div class="archive-card__img-wrap">
        <b-img
          slot="aside"
          blank
          blank-color="#ccc"
          width="64"
          alt="placeholder"
          class="archive-card__image"
        />
      </div>

      <div class="archive-card__meta">
        <slot name="card-meta"/>
      </div>
    </div>
  </b-media>
</template>

<script>
export default {
  name: 'ArchiveCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      required: true
    },
    detailSlug: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.archive-card {
  position: relative;
  &__header {
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 10px 10px 0 0;
    padding: 12px 16px;
    margin: 0;
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a,
    span {
      color: #fff;
    }
  }
  &__content-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  &__content {
    flex-basis: 90%;
  }
  &__img-wrap {
    flex-basis: 10%;
  }
  &__img {
    display: block;
    margin-left: auto;
  }
  &__meta {
    display: flex;
    ul {
      list-style: none;
      display: flex;
      li {
        padding: 0 4px;
        &:not(:last-of-type):after {
          content: '|';
          display: inline-block;
          transform: translateX(4px);
        }
      }
    }
  }
}
</style>
