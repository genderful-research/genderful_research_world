<script setup>
import { defineProps, ref, computed } from "vue"
import { useStore } from 'vuex'

defineProps({
  item: Object,
})
const selected = ref()
const store = useStore()
const answers = computed(() => store.state.answers)
const storeAnswer = (item) => store.dispatch('addAnswer', item)
const yesno = [
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'},
]
</script>

<template>
<p>{{ answers }}</p>

    <p>{{ item.question }}</p>
    <b-button-group>
        <b-button
            v-for="answer in yesno"
            variant="outline-primary"
            size="lg"
            :key="answer.value"
            @click.stop="storeAnswer(item)"
            :pressed="selected === answer.value">
            {{ answer.text }}
        </b-button>
    </b-button-group>
</template>