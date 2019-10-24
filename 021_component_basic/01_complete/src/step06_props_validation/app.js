
// 컴포넌트의 data는 함수여야한다
Vue.component('my-component', {
    props:{
        myMessage1:{
            type:String,
            required:true
        },myMessage2:{
            type:Number
        }
    },
    template: '<span>{{myMessage1}}, {{myMessage2}}</span>'

})

new Vue({
    el: '#example',
    data:{
        data1:"테스트"
    }
})