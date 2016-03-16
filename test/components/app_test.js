import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('renders the correct text', () => {
    expect(component).to.contain('TDD');
  });

	it('shows a comment box', () => {
		component.simulate('submit');
		expect(component.find('.comment-box')).to.exist;
	});

});
