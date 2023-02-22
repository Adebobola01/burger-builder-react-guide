import React from "react";
import { configure, shallow } from "enzyme";
import { Adapter } from "enzyme-adapter-react-16";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() });
describe("<NavigationItems/>", () => {
    it('should render two nav items', ()=>{
        const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(<NavigationItem />)).toHaveLength(2);
    })
})