import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Test CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a comment-box class', () => {
    expect(component).to.have.class('comment-box');
  })

  it('has a text area', () => {
    //renderComponent returns a jQuery object, so I can use any jQuery method
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      //Finding text area with jQuery method, then simulating 'change' event, then assigns 'new comment' string as the value
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the textarea', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
