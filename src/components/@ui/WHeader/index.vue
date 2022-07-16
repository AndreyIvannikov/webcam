<template>
  <header :class="$style.header">
    <div :class="[$style.header__top, $style.container]">
      <a :class="$style.header__logo">
        <w-icon iconName="logo" size="auto" />
      </a>
      <div :class="$style.header__topText">
        Каталог и сертификация вебкам-студий
      </div>
      <div :class="$style.header__topIcons">
        <a :class="$style.header__topLink">
          <WIcon iconName="hearth" />
        </a>
        <a :class="$style.header__topLink">
          <WIcon iconName="message" />
        </a>
      </div>
    </div>
    <div :class="$style.header__bottom">
      <div :class="[$style.container, $style.header__bottomContent]">
        <div>asdd</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped module>
.header {
  gap: 0.5rem;
  background-color: $white-default;
  &__logo {
    display: flex;
    align-items: center;
    height: 92px;
    margin-right: 50px;
  }
  &__top {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  &__bottom {
    display: flex;
    align-items: center;
    height: 62px;
    background: linear-gradient(90deg, #d9f4ff 0%, #e9dbff 100%);
  }
  &__topText {
    flex: 1;
  }
  &__topIcons {
    display: flex;
    a + a {
      margin-left: 45px;
    }
  }
  &__topLink {
    width: 25px;
    height: 25px;
  }
}
</style>
