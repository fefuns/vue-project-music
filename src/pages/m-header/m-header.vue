<template>
  <header class="m-header">
    <div class="header-right">
      <i class="iconfont icon-mine"></i>
    </div>
    <div class="page-tt">VUE MUSIC</div>
  </header>
</template>
<style lang="scss">
  @import 'src/assets/scss/mixin.scss';

  .m-header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 44px;
    line-height: 44px;
    z-index: 1000;


    .iconfont {
      position: relative;
      float: left;
      width: 44px;
      color: #ffcd32;
      height: 44px;
      font-size: 20px;

      &:before {
        @include center-xy;
      }

      &:hover {
        background: rgba(0, 0, 0, .3);
      }
    }

    .header-right {
      float: right;
      height: 44px;
    }

    .page-tt {
      position: absolute;
      left: 88px;
      right: 88px;
      text-align: center;
      font-size: 18px;
      color: #ffcd32;
      @include ellipsis;
    }
  }
</style>
