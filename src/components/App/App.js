import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from 'components/List';
import { Title, Wrapper } from './styles';
import Loader from 'components/Loader';

class App extends Component {
/*call function to load first page. Call it inside ComponentDidMount.
Default way to call function on page load*/
	componentDidMount() {
		this.props.fetchStoriesFirstPage()
	}

	fetchStories = () => {
		const { storyIds, page, fetchStories, isFetching } = this.props;
		if (!isFetching) {
			fetchStories({ storyIds, page });
		}
	}

	render() {

		/*get stories from props*/
		const { stories, hasMoreStories } = this.props;

		return (
			<ThemeProvider theme={colorsDark}>
				<div>
					<Wrapper>
						<Title>Hacker News for you!</Title>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
							<List stories={stories} />
						</InfiniteScroll>
					</Wrapper>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;