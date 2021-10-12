<script setup>
import {defineProps, ref} from "vue"
defineProps({
  item: Object,
})
const selected = ref()
const answers = [
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'},
]
</script>

<template>
    <p>{{ item.question }}</p>
    <b-button-group>
        <b-button
            v-for="answer in answers"
            variant="outline-primary"
            size="lg"
            :key="answer.value"
            @click.stop="selected = answer.value"
            :pressed="selected === answer.value">
            {{ answer.text }}
        </b-button>
    </b-button-group>
</template>