// import { fireEvent } from '@testing-library/vue'
import { Base, useQuerySite } from '../utils/core'
import Component from '~/components/TheHeader.vue'
const base = new Base(Component)
const { result } = useQuerySite()

describe('components/TheHeader.vue', () => {
  test('Display avatar image', () => {
    const { getByAltText } = base.render()

    const Image = getByAltText(
      result.value?.Header?.Image?.Alt?.pl ?? ''
    ) as HTMLImageElement
    expect(Image).toBeVisible()
    expect(Image.src).toContain('https://cdn.sanity.io/images/')
  })

  test('Display Title', () => {
    const { getByText } = base.render()
    const Title = getByText(result.value?.Header?.Title?.pl ?? '')
    expect(Title).toBeVisible()
  })

  test('Display Subtitle', () => {
    const { getByText } = base.render()
    const Subtitle = getByText(result.value?.Header?.Subtitle?.pl ?? '')
    expect(Subtitle).toBeVisible()
  })
})