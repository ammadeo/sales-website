import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
const base = new Base(Component)

describe('components/TheNavigation.vue', () => {
  test.todo('implement tests!')
  test('', async () => {
    const { getByText } = base.render()
  })
})