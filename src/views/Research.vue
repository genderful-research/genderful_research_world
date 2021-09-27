<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ title }}</h1>
        <p>Intro</p>
      </div>
      <div class="col">
          <h2>Research area</h2>
            {{ areas }}
            <b-card>
                <h3>Resources on the relevance</h3>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </b-card>
            <b-card>
                <h3>Resources on the best practices</h3>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        areas: Array
    }
}
</script>
