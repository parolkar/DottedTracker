import React from 'react';
import { shallow } from 'enzyme';
import ExpandedStoryLabels from 'components/story/ExpandedStory/ExpandedStoryLabels';

describe('<ExpandedStoryLabels />', () => {
  const defaultProps = () => ({
    onAddLabel: sinon.spy(),
    onRemoveLabel: sinon.spy(),
    projectLabels: []
  });

  it('renders component title', () => {
    const labels = [
      { id: 0, name: 'front' },
      { id: 1, name: 'back' }
    ];

    const story = { _editing: { labels } }
    const wrapper = shallow(
      <ExpandedStoryLabels {...defaultProps()} story={story} />
    );

    expect(wrapper.text()).toContain(I18n.t('activerecord.attributes.story.labels'));
  });

  describe('<ReactTags />', () => {
    it('renders with the right tags prop', () => {
      const labels = [
        { id: 0, name: 'front' },
        { id: 1, name: 'back' }
      ];

      const story = { _editing: { labels } }
      const wrapper = shallow(
        <ExpandedStoryLabels {...defaultProps()} story={story} />
      );

      expect(wrapper.find('ReactTags').prop('tags')).toEqual(labels);
    });
  });
});
