import { connect } from 'react-redux';
import actions from 'store/story/actions';
import { hasMoreStoriesSelector } from 'store/story/selectors';
import App from './App';

/*Connect function will take two arguements. Both these functions,
mapStateToProps and mapDispatchToProps will return objects which
it will then pass values as props to our components
*/

/*This is passing state as props using it as
data in your function*/
const mapStateToProps = state=> ({
    stories: state.story.stories,
    page: state.story.page,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching,
    hasMoreStories: hasMoreStoriesSelector(state),
})

/*used to trigger new actions inside our components.
Creates special function which will allow
our components to talk to redux store*/
const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
  fetchStories:({storyIds, page}) => dispatch(actions.fetchStories({storyIds,page})),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);