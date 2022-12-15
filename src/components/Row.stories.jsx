import Row, { RowSizes, RowSpeed } from './Row'

export default {
  title: 'MyComponents/Row',
  component: Row,
  tags: ['docsPage'],
  argTypes: {
    color: { control: 'color' },
    speed: {
        options: RowSpeed,
        control: { type: 'select' },
    },
    size: { 
        options: ['lg', 'md', 'sm'],
        control: { type: 'select' },
    },
  },
}

export const Default = {
  args: {
    defaultData: "0,1,1,0,0,0,1,1,0",
    dotCount: 8,
    size: RowSizes.md,
    stop: true,
  },
}