import { Story, Meta } from '@storybook/vue'
import { Controls } from '@/libs/storybook'
import Star from '@/components/icon/Star.vue'

export default ((): Meta => ({
    title: 'Components/Star',
    component: Star,
    argTypes: {
        value: {
            control: Controls.boolean(),
        },
        color: {
            control: Controls.color(),
        },
        onClick: { action: 'clicked' },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Star },
    template: `
        <Star v-bind="$props" @change="onClick" />
    `,
})

export const Default = Template.bind({})
Default.args = {
    value: false,
}

export const Fill = Template.bind({})
Fill.args = {
    value: true,
}

export const Size = Template.bind({})
Size.args = {
    width: '100px',
    height: '100px',
}

export const Readonly = Template.bind({})
Readonly.args = {
    readonly: true,
}

export const Color = Template.bind({})
Color.args = {
    color: '#1481DD',
}
