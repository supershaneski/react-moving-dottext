import DotText from './DotText'
import { RowSizes, RowSpeed } from './Row'

export default {
  title: 'MyComponents/DotText',
  component: DotText,
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
        play: true,
    },
}

export const SizeSmall = {
    args: {
        text: "The Big Lebowski",
        play: true,
        size: RowSizes.sm,
    },
}

export const RedTextLong = {
    args: {
        text: "Happy Valentines Day",
        play: true,
        color: '#f00',
        length: 52,
    },
}