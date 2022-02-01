const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Smith",
            email: "john@gmail.com",
            gender: "male",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
        }
    },

    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()
            //console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large
        },
    },
})

app.mount("#app")