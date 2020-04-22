import React from 'react';
import App from './App';
import {shallow, ShallowWrapper} from "enzyme";
import Home from "./components/Home";

describe('Router', () => {
  test('renders App component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div').text()).toBe("<BrowserRouter />");
  });
});

describe("Home Page", () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {wrapper = shallow(<Home/>)});

  test("renders Title", () => {
    expect(wrapper.find("h1").text()).toContain("Online Minecraft");
  });

  test("renders Links", () => {
    expect(wrapper.find(".home-btns").children().length).toBe(5);
  });
});

