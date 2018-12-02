<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="releases">Releases</b-nav-item>
        <b-nav-item to="authors">Authors</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
