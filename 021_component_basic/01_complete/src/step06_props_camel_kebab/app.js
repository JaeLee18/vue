
// 컴포넌트의 data는 함수여야한다
Vue.component('my-component', {
    props:["myMessage"],
    template: '<span>{{myMessage}}</span>'

})

new Vue({
    el: '#example',
    data:{
        data1:"테스트"
    }
})