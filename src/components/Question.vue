<script setup>
import { defineProps } from "vue"
import { useStore } from 'vuex'
import marked from "marked"
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const localLink = href.startsWith(`${location.protocol}//${location.hostname}`);
  const html = linkRenderer.call(renderer, href, title, text);
  return localLink ? html : html.replace(/^<a /, `<a target="_blank" `);
};

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
        <div class="text-danger" v-else v-html="marked(item.explanation, {renderer})"/>
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