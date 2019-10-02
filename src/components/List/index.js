import React from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

const List = ({stories}) => (
	<ListWrapper>
		{stories.map(story => <ListItem {...story} key={story.id} />)}
	</ListWrapper>
)

export default List;