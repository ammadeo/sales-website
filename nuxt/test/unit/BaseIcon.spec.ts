import { Base } from '../utils/core'
import Component from '~/components/BaseIcon.vue'
import { useIcon, IconId } from '~/composable/useIcon'
const base = new Base(Component)
const icon: IconId = 'close'
const { alt } = useIcon(icon)
describe('components/BaseIcon.vue', () => {
  test('show icon based on "icon" prop', () => {
    const { getByAltText } = base.render({ props: { icon } })
    expect(getByAltText(alt.value)).toBeVisible()
  })

  test('set icon color based on "color" prop', () => {
    const { getByAltText } = base.render({
      props: { icon, color: 500 },
    })
    expect(getByAltText(alt.value).classList).toContain('text-primary-500')
  })

  test('set icon height based on "height" prop', () => {
    const { getByAltText } = base.render({
      props: { icon, height: 16 },
    })
    expect(getByAltText(alt.value).classList).toContain('h-16')
  })
})
