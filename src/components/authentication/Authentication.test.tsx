import React from "react";
import {mount, ReactWrapper} from "enzyme";
import Registration from "./Registration";
import {BrowserRouter} from "react-router-dom";

describe("Registration component", () => {
    let wrapper:ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<BrowserRouter><Registration/></BrowserRouter>)

    });

    test("renders page", () => {
        expect(wrapper.find(".auth-title").text()).toContain("Registration");
    });

    test("submit button disabled", () => {
        expect(wrapper.find(".auth-submit").prop("disabled")).toBe(true);
    });

    test("submit button enable", () => {
        wrapper.find(".username").simulate("change", {target: {value: "Janos"}});
        expect(wrapper.find(".username").prop("value")).toBe("Janos");
    });

});