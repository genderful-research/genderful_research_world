<script setup>
import { defineProps } from "vue"
import { useStore } from 'vuex'

defineProps({
  item: Object,
})
const store = useStore()
const selected = (item) => store.getters.selectedAnswer(item.id)
const storeAnswer = (item, answer) => store.dispatch('addAnswer', {item: item, answer: answer})
const yesno = [
    {text: 'True', value: true},
    {text: 'False', value: false},
]
</script>

<template>
    <h5>{{ item.question }}</h5>
    <div v-if="selected(item)">
        <p>
            You chose {{ selected(item)['selected'] }}
        </p>
        <p class="text-success" v-if="selected(item)['correct']">
            The answer was correct!
        </p>
        <p class="text-danger" v-else>
            {{ item.explanation }}
        </p>
    </div>
    <div v-else>
        <b-button-group>
            <b-button
                v-for="answer in yesno"
                variant="outline-primary"
                size="lg"
                :key="answer.value"
                @click.stop="storeAnswer(item, answer.value)">
                {{ answer.text }}
            </b-button>
        </b-button-group>
    </div>
</template>