
import { Meta, ComponentStory } from '@storybook/react';
import { ArticleBody, BodyProps } from './ArticleBody';

const defaultArgs: BodyProps = {
 body: '## SampleText',
};

export default {
  component: ArticleBody,
  title: 'Molecules/ArticleBody',
} as Meta<typeof ArticleBody>;

const Template: ComponentStory<typeof ArticleBody> = (args: BodyProps) => (
  <ArticleBody {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
