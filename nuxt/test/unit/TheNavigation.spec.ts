import { waitFor, fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
import { useIcon, IconId } from '~/composable/useIcon'
const icon: IconId = 'menu'
const { alt } = useIcon(icon)
const base = new Base(Component)

describe('components/TheNavigation.vue', () => {
  test('Side navigation is hidden before medium viewport size', async () => {
    const { getByTestId } = base.render()

    const NavSideClasses = getByTestId('nav-side').classList
    expect(NavSideClasses.toString()).toContain('hidden')
    expect(NavSideClasses.toString()).toContain('md:flex')
  })

  test('Bottom navigation is hidden after medium viewport size', async () => {
    const { getByTestId } = base.render()

    const NavSideClasses = getByTestId('nav-bottom').classList
    expect(NavSideClasses.toString()).toContain('md:hidden')
  })

  test('Toggle side navigation panel on click on menu button', async () => {
    const { getByAltText, getByTestId } = base.render()

    const Button = getByAltText(alt.value)
    await fireEvent.click(Button)
    const Panel = getByTestId('nav-panel')
    expect(Panel).toBeVisible()
    await fireEvent.click(Button)
    expect(Panel).not.toBeVisible()
  })
})
