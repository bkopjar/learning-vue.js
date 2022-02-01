const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Smith",
            email: "john@gmail.com",
            gender: "male",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
        }
    },
})

app.mount("#app")