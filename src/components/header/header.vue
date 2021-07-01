<template>
    <div class="header">
<span class="title">{{title}}</span>
<slot name="img-1"></slot>
<slot name="image-one"></slot>
<slot name="image-two"></slot>
<slot name="image-t"></slot>
    </div>
</template>

<script>
export default {
    props: {
title:{
   type:String
}
    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.header{
    font-size: 0;
    height:.43rem;
    background: #f7f7f7;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: .43rem;
    position: relative;
    .title{
        font-size: .2rem;
    }
    img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: .24rem;
        height:.21rem ;
    }
    .img-one{
       
        right: .10rem;
    }
    .img-two{
        
        right: .51rem;
    }
}
</style>
