<template>
  <div class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto">
    <div data-aos="fade-up" class="text-center">
      <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        {{ $t('stack.header') }}
      </h2>
      <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
        {{ $t('stack.subtext') }}
      </p>
    </div>
    <div data-aos="zoom-in" class="max-w-4xl mx-4 border border-dashed border-gray-700 sm:mx-auto bg-gray-900 shadow-md rounded-md overflow-hidden sm:rounded-lg">
      <div>
      <dl>
        <div v-for="(item, index) in $config.stack.meta" :class="index%2 === 0 ? 'bg-gray-800' : 'bg-gray-900'" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            <strong>
            {{ item.title }}
            </strong>
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-400 sm:mt-0 sm:col-span-2">
            {{ item.value }}
          </dd>
        </div>
      </dl>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Stack - ${this.$config.name}`
    }
  },
}
</script>

<style scoped>

</style>
