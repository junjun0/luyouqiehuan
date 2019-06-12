<template>
    <!-- <div class="home">
        <h1>主页内容</h1>
    </div> -->
    <div id="name">
        <button @click="showCont" class="button">信息采集系统</button>
        <table v-if="show">    
            <tr class="field">
                <td>id</td>
                <td>IMEI</td>
                <td>device</td>
                <td>message</td>
                <td>tel</td>
                <td>createdAt</td>
            </tr>
            <tr v-for="index in syk" class="content">
                <td>{{index.id}}</td>
                <td>{{index.IMEI}}</td>
                <td>{{index.device}}</td>
                <td>{{index.message}}</td>
                <td>{{index.tel}}</td>
                <td>{{index.createdAt}}</td>
            </tr>
            <!-- <p>syk:{{ syk }}</p> --> 
        </table>
    </div>
</template>

<script>
export default {
    name:"name",
        data(){
                return{
                syk:'', 
                show:true
                }
            },
    methods:{
        showCont:function(){
        this.show = !this.show;
    }
    },
    created(){
        this.axios.get('http://localhost:60020/all').then((response) => {
        console.log(response.data.data[1]);
        this.syk=response.data.data;
            console.log(this.syk);
        }).catch((error)=>{
             console.log(error)
        })
    }
}
</script>

<style>

.button{
    width: 200px;
    display: block;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;
    color: coral;
    border: 0;
    background: none;
    cursor: pointer;
    padding: 30px 0;
}
table{
   margin: 0 auto;
}
.field{
    line-height: 50px;
    background-color: aquamarine;
}
.field td{
    width: 50px;
    text-align: center;
    font-size: 20px;
}
.content{
    text-align: center;
    background-color: bisque;
}
</style>
