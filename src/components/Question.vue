<script setup>
import { defineProps, toRefs } from "vue"
import { useStore } from 'vuex'
import marked from "marked"
import content from '@/assets/content.yml'

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const localLink = href.startsWith(`${location.protocol}//${location.hostname}`);
  const html = linkRenderer.call(renderer, href, title, text);
  return localLink ? html : html.replace(/^<a /, `<a target="_blank" `);
};

const props = defineProps({
  item: Object,
  section: String,
})
const { item, section } = toRefs(props);

const store = useStore()
const selected = (item) => store.getters.selectedAnswer(item.id)
const maxQuestions = store.getters.getMaxQuestions(section.value)
const variant = (answer, item) => {
    if (answer.value == true) {
        return selected(item)['selected'] == true ? "success" : "outline-success"
    }
    if (answer.value == false) {
        return selected(item)['selected'] == false ? "danger" : "outline-danger"
    }
}
const storeAnswer = (item, answer) => store.dispatch('addAnswer', {item: item, answer: answer})
const nextQuestion = () => store.commit("updateQuestionNumber", section.value)
const getScore = (section) => store.getters.getScore(section)
const yesno = [
    {text: 'True', value: true},
    {text: 'False', value: false},
]
</script>

<template>
    <div v-if="item">
        <div class="card" style="max-width: 40rem;" >
            <div class="card-header">
                Question {{ item.number}} of {{ maxQuestions }}
            </div>
        <div class="card-body">
            <p class="fs-5">{{ item.question }}</p>
        <div 
            class="collapse" 
            id="explain" 
            v-html="marked(item.explanation, {renderer})"
            v-if="!!selected(item)"
            />
            <div class="align-middle text-center">
                <div class="btn-group float-start" role="group">
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
                class="align-middle text-center text-success fs-5"
                v-if="selected(item)['correct']">
                Correct!
            </span>
            <span class="text-danger fs-5"
                v-else>
                Incorrect!
            </span>
        </template>
            <transition name="fade">
            <button
                    class="btn float-end btn-outline-secondary"
                    v-if="selected(item)"
                    data-bs-toggle="collapse" 
                    data-bs-target="#explain"
                    aria-expanded="false" 
                    aria-controls="explain">
                    Explain</button>
            </transition> 
        </div>
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
    <div v-else>
            <div v-if="getScore(section) > 75" class="alert alert-success">
                <h4 class="alert-heading">Score: {{ getScore(section) }}%</h4>
                <p>{{ content.quiz_results.good }}</p>
                <router-link class="btn btn-secondary" to="/introduction">Go to introduction</router-link>
            </div>
            <div v-else-if="getScore(section) > 50" class="alert alert-warning">
                <h4 class="alert-heading">Score: {{ getScore(section) }}%</h4>
                <p>{{ content.quiz_results.average }}</p>
                <router-link class="btn btn-secondary" to="/introduction">Go to introduction</router-link>
            </div>
            <div v-else class="alert alert-danger">
                <h4 class="alert-heading">Score: {{ getScore(section) }}%</h4>
                <p>{{ content.quiz_results.bad }}</p>
                <router-link class="btn btn-secondary" to="/introduction">Go to introduction</router-link>
            </div>
    </div>
</template>
