const { createApp, ref } = Vue

const App = {
    setup() {
        const sliderValue = ref(0)
        const inputValue = ref('')
        return {
            inputValue, sliderValue
        }
    },
    components: {
        "p-slider": primevue.slider,
        "p-inputmask": primevue.inputmask,
        "p-button": primevue.button
    },
    methods: {
        showMessage() {
            alert(`Hello, PrimeVue!\n\nSlider value: ${this.sliderValue}\nInput value: ${this.inputValue}`)
        }
    }
}

createApp(App).use(primevue.config.default).mount("#app")