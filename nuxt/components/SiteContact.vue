<template>
  <div class="flex flex-col">
    <BaseContent id="contact" :content="content" class="site-content" />
    <div
      class="ml-3 flex flex-col items-center self-end transform lg:translate-x-1/2"
    >
      <BaseButton
        content="Napisz do mnie e-mail"
        class="mt-2"
        data-testid="contact-send-email"
        @click="submit"
      />
      <button class="text-primary-100 hover:text-white" @click="showMail">
        Pokaż dane kontaktowe
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  computed,
  defineComponent,
} from '@nuxtjs/composition-api'

import {
  useObserverProp,
  useObserverObserve,
  ObserverPropType,
} from '~/composable/useObserver'

import { useStore } from '~/composable/useStore'
import { useMail } from '~/composable/useMail'
import { useAnalytics } from '~/composable/useAnalytics'
interface Props extends ObserverPropType {
  page: { content: { pl: unknown; en: unknown } }
}

export default defineComponent<Props>({
  props: {
    ...useObserverProp(),
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    useObserverObserve(props, 'contact')

    const content = computed(() => props.page.content.pl)

    const { send } = useMail('cooperationRequestPL')
    const { trackEvent } = useAnalytics()
    const submit = async () => {
      try {
        await trackEvent('link-mailto')
      } catch (error) {
        console.error(error)
      }
      send()
    }

    const showMail = async () => {
      try {
        await trackEvent('show-contact-info')
      } catch (error) {
        console.error(error)
      }
      useStore.requestCooperation.set('showModal', true)
      useStore.requestCooperation.set('manual', true)
    }

    return {
      content,
      showMail,
      submit,
    }
  },
})
</script>
