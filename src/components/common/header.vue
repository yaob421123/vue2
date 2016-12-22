<template>
    <div class="myfooter">
        我是头部
        <div v-if='isLogin == 0' class="login">
            <p><input type="text" placeholder="name" v-model="userList.name"></p>
            <p><input type="number" placeholder="age" v-model="userList.age"></p>
            <a href="javascript:;" @click='onLogin'>登陆</a>
        </div>
        <div v-else>
            <p>name：{{userInfo.name}}</p>
            <p>age：{{userInfo.age}}</p>
            <a href="javascript:;" @click='onLogout'>退出</a>
        </div>
        <div class="nav">
            <router-link to="/">首页</router-link>
            <router-link to="404">404</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data () {
            return {
                userList:{
                    name:'',
                    age:''
                }
            }
        },
        created(){
            
        },
        computed:{
            ...mapGetters({
                isLogin: 'isLogin',
                userInfo: 'userInfo'
            })
        },
        methods:{
            onLogin:function(){
                if(!this.userList.name || !this.userList.age){
                    alert('请输入用户名和密码');
                    return
                }
                this.$store.dispatch('USER_SIGNIN', this.userList);
            },
            onLogout:function(){
                this.$store.dispatch('USER_SIGNOUT');
            }
        }
    }
</script>

<style scoped>
.login p{
    width: 200px;
    margin:5px 0;
    border:1px solid #ccc;
    
}
.login input{
    padding:0 5px;
    width:100%;
}

.nav a{
    display:inline-block;
    width: 100px;
    text-align:center;
    border:1px solid #ccc;
}
</style>
