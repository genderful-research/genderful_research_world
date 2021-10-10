<script setup>
import quiz from '@/assets/quiz.yml';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
          <h3>{{ quiz.general.definition.question }}</h3>
          <p>
            <input type="radio" class="btn-check" name="definition" id="definition-yes" autocomplete="off">
            <label class="btn btn-outline-success" for="definition-yes">Yes</label>

            <input type="radio" class="btn-check" name="definition" id="definition-no" autocomplete="off">
            <label class="btn btn-outline-danger" for="definition-no">No</label>
          </p>
          <h3>{{ quiz.general.relevance.question }}</h3>
            <p>
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off">
            <label class="btn btn-outline-success" for="success-outlined">Yes</label>

            <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
            <label class="btn btn-outline-danger" for="danger-outlined">No</label>
          </p>

    <!-- {{ quiz }} -->
      </div>
    </div>
    </div>
</template>