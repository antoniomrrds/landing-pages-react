import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque quis tenetur, natus dignissimos repudiandae quas tempore culpa quae laboriosam recusandae sequi esse optio? Beatae culpa quam atque accusamus animi.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
