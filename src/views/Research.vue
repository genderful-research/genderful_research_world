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
            <b-card bg-variant="light" header="Resources on the relevance">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </b-card>
            <b-card bg-variant="light" header="Resources on the best practices">
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
