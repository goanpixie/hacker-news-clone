import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import List from 'components/List';
import { Title, Wrapper } from './styles';

class App extends Component {
/*call function to load first page. Call it inside ComponentDidMount.
Default way to call function on page load*/
	componentDidMount() {
		this.props.fetchStoriesFirstPage()
	}

	render() {

		/*get stories from props*/
		const { stories } = this.props;

		return (
			<ThemeProvider theme={colorsDark}>
				<div>
					<Wrapper>
						<Title>Hacker News for you!</Title>
						<List stories = {stories}/>
					</Wrapper>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;