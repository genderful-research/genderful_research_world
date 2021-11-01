<script setup>
import { defineProps, toRefs } from "vue"
import { useStore } from 'vuex'
import marked from "marked"
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const localLink = href.startsWith(`${location.protocol}//${location.hostname}`);
  const html = linkRenderer.call(renderer, href, title, text);
  return localLink ? html : html.replace(/^<a /, `<a target="_blank" `);
};

const props = defineProps({
  item: Object,
})
const { item } = toRefs(props);

const store = useStore()
const selected = (item) => store.getters.selectedAnswer(item.id)
const variant = (answer, item) => {
    if (answer.value == true) {
        return selected(item)['selected'] == true ? "success" : "outline-success"
    }
    if (answer.value == false) {
        return selected(item)['selected'] == false ? "danger" : "outline-danger"
    }
}
const storeAnswer = (item, answer) => store.dispatch('addAnswer', {item: item, answer: answer})
const nextQuestion = () => store.commit("updateQuestionNumber")
const yesno = [
    {text: 'True', value: true},
    {text: 'False', value: false},
]
</script>

<template>
    <div v-if="item" :key="item.number">
        <div class="card"
            style="max-width: 40rem;"        >
        <div class="card-header">
            Question {{ item.number}}
        </div>
        <div class="card-body">
                    <p class="fs-5">{{ item.question }}</p>

        <div 
            class="collapse" 
            id="explain" 
            v-html="marked(item.explanation, {renderer})"
            v-if="!!selected(item)"
            />
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <div class="btn-group" role="group">
                    <button
                        v-for="answer in yesno"
                        class="btn"
                        :class="'btn-' + variant(answer, item)"
                        :key="answer.value"
                        :disabled="!!selected(item)"
                        @click.stop="storeAnswer(item, answer.value)">
                        {{ answer.text }}
                    </button>
            
                </div>
        <template v-if="selected(item)">
            <span 
                class="navbar-text text-success fs-5"
                v-if="selected(item)['correct']">
                Correct!
            </span>
            <span class="navbar-text text-danger fs-5"
                v-else>
                Incorrect!
            </span>
        </template>
            <transition name="fade">
            <button
                    class="btn btn-outline-secondary"
                    v-if="selected(item)"
                    data-bs-toggle="collapse" 
                    data-bs-target="#explain"
                    aria-expanded="false" 
                    aria-controls="explain">
                    Explain</button>
            </transition> 
        </div>
        </nav>


        </div>

            <div class="card-footer text-end">
                <button
                    class="btn btn-outline-secondary"
                    :disabled="!selected(item)" 
                    @click.stop="nextQuestion()">
                Next ⮕</button>
            </div>
        </div>
    </div>
</template>