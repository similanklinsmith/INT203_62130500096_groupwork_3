    const app = {
        data() {
            return {
               members:[
                   {name:'Takata Mashiho',position:'Vocalist',img:'images/profile-1-1.jpg',like:false},
                   {name:'Kanemoto Yoshinori',position:'Rapper',img:'images/profile-2.jpg',like:false},
                   {name:'Watanabe Haruto',position:'Rapper',img:'images/profile-3.jpg',like:false},
                   {name:'Hamada Asahi',position:'Vocalist',img:'images/profile-4.jpg',like:false}
               ]
            }
        },
        methods:{
            toggleLike(index){
                this.members[index].like = !this.members[index].like
            }
        },
        computed:{
            countLiked(){
                return this.members.filter( m => m.like).length
            }
        }

    }
Vue.createApp(app).mount('#app')
