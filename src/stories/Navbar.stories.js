import React from "react";

import { Navbar } from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Navigation",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Navbar',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Navbar',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Navbar',
// };
