

import Card from "./Card";

export default {
  title: 'Components/Card',
  component: Card,

    
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: 'https://as2.ftcdn.net/jpg/07/08/47/75/1000_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg',
  title: 'Card Title',
  description: 'Card Description',
};
