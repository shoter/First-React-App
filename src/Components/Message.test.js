import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from "react-dom/test-utils"
import Message from "./Message";

describe("Message component", () => {
var self = {};
beforeEach(function() {
    self.component = TestUtils.renderIntoDocument(<Message message="dupa" />);
    self.selectDOM = () => ReactDOM.findDOMNode(self.component);
    console.log("beforeEach");
})

it('render smoke test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message message="Dupa" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it("renders a div", function() {
    expect(self.selectDOM().tagName).toEqual("DIV");
});

it("Handles onClick event")
{

}


  
})