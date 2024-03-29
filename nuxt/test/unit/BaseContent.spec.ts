import { Base } from '../utils/core'
import Component from '~/components/BaseContent.vue'
import { Block, ContentText } from '~/types/BaseContent'

const enum Paragraph {
  normal,
  columnOnlySecond,
  title,
  subtitle,
  marks,
  definition,
}

const content = [
  {
    //* style normal
    _key: 'a7c3c1455c07dsas',
    _type: 'block',
    children: [
      {
        _key: '7c0a9e6cedsa4cd',
        _type: 'span',
        marks: [],
        text: 'normal',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  //* column settings
  { _key: '3700aebb6bba', _type: 'column', set: 'only-second' },
  {
    //* style title
    _key: 'a7c3c1455c07',
    _type: 'block',
    children: [
      {
        _key: '7c0a9e6ce4cd',
        _type: 'span',
        marks: [],
        text: 'title',
      },
    ],
    markDefs: [],
    style: 'title',
  },
  {
    //* style subtitle
    _key: 'a7sc3c1455c07',
    _type: 'block',
    children: [
      {
        _key: '7c0ad9e6ce4cd',
        _type: 'span',
        marks: [],
        text: 'subtitle',
      },
    ],
    markDefs: [],
    style: 'subtitle',
  },
  {
    //* marks
    _key: '0c0f32b912b6',
    _type: 'block',
    children: [
      {
        _key: '1c94cf3d247e',
        _type: 'span',
        marks: ['em'],
        text: 'italic',
      },
      {
        _key: 'd7eb55be733a',
        _type: 'span',
        marks: ['strong'],
        text: 'strong',
      },
      {
        _key: 'd7eb55be733a',
        _type: 'span',
        marks: ['f53d91b36f56'],
        text: 'link',
      },
    ],
    markDefs: [
      {
        _key: 'f53d91b36f56',
        _type: 'link',
        href: 'href',
      },
    ],
    style: 'normal',
  },
  //* type definition
  {
    _key: '5261c47e7278',
    _type: 'definition',
    color: {
      _type: 'color',
      alpha: 1,
      hex: '#f03e2f',
      hsl: {
        _type: 'hslaColor',
        a: 1,
        h: 4.663212435233159,
        l: 0.5627450980392157,
        s: 0.8654708520179372,
      },
      hsv: {
        _type: 'hsvaColor',
        a: 1,
        h: 4.663212435233159,
        s: 0.8041666666666667,
        v: 0.9411764705882353,
      },
      rgb: { _type: 'rgbaColor', a: 1, b: 47, g: 62, r: 240 },
    },
    content: 'definition_content',
    text: 'definition_text',
    textBefore: 'definition_textBefore',
    textAfter: 'definition_textAfter',
    title: 'definition_title',
  },
] as ContentText
const base = new Base(Component, { props: { content } })

describe('components/BaseContent.vue', () => {
  const normal = (content[Paragraph.normal] as Block).children[0].text
  const title = (content[Paragraph.title] as Block).children[0].text
  const subtitle = (content[Paragraph.subtitle] as Block).children[0].text
  describe('paragraph style', () => {
    it('Render content with style "normal" with normal styles', () => {
      const { getByText } = base.render()
      const Span = getByText(normal)
      const Paragraph = Span.parentElement

      expect(Span).toBeVisible()
      expect(Span.tagName.toLowerCase()).toBe('span')
      expect(Paragraph?.tagName.toLowerCase()).toBe('p')
    })

    it('Render content with style "title" with title styles', () => {
      const { getByText } = base.render()
      const Span = getByText(title)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      expect(Paragraph?.tagName.toLowerCase()).toBe('h2')
      expect(Paragraph?.classList).toContain('text-2xl')
    })

    it('Render content with style "title" with proper level from "level" prop', () => {
      const { getByText } = base.render({
        props: { level: 3 },
      })
      const Span = getByText(title)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h2')
      // expect(Paragraph?.classList).toContain('text-2xl')
      // await updateProps({ level: 3, content: { ...content } })
      expect(Paragraph?.tagName.toLowerCase()).toBe('h3')
      expect(Paragraph?.classList).toContain('text-xl')
      // await updateProps({ level: 4, content: { ...content } })
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h4')
      // expect(Paragraph?.classList).toContain('text-lg')
    })

    it('Render content with style "subtitle" with proper level from "level" prop', () => {
      const { getByText } = base.render({
        props: { level: 3 },
      })
      const Span = getByText(subtitle)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h3')
      // expect(Paragraph?.classList).toContain('text-lg')
      // await updateProps({ level: 3, content: { ...content } })
      expect(Paragraph?.tagName.toLowerCase()).toBe('h4')
      expect(Paragraph?.classList).toContain('text-md')
      // await updateProps({ level: 4, content: { ...content } })
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h5')
    })
  })

  describe('span marks', () => {
    const marksParagraph = content[Paragraph.marks] as Block
    const em = marksParagraph.children[0].text
    const strong = marksParagraph.children[1].text
    const link = marksParagraph.children[2].text

    it('Render span with "em" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(em)
      expect(Span).toBeVisible()
      expect(Span.classList).toContain('italic')
    })

    it('Render span with "strong" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(strong)
      expect(Span).toBeVisible()
      expect(Span.classList).toContain('font-semibold')
    })

    it('Render link with "link" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(link) as HTMLLinkElement
      expect(Span).toBeVisible()
      expect(Span.tagName.toLowerCase()).toBe('a')
      expect(Span.href).toContain('href')
    })
  })

  describe('column settings', () => {
    it('Render content inside both column div, by default', () => {
      const { getByText } = base.render()
      const Column = getByText(normal).parentElement?.parentElement
      expect(Column?.classList).toContain('lg:w-full')
    })

    it('Render content inside only second column div, after marker', () => {
      const { getByText } = base.render()
      const Column = getByText(title).parentElement?.parentElement
      expect(Column?.classList).toContain('lg:w-1/2')
    })
  })

  describe('definition', () => {
    // @ts-expect-error
    const definition = content[Paragraph.definition].text

    it('Render definition text', () => {
      const { getByText } = base.render()
      const Span = getByText(definition)
      expect(Span).toBeVisible()
    })
  })
})
