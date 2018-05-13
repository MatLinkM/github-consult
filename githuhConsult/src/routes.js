import { StackNavigator, TabNavigator } from 'react-navigation';

import Repositories from './pages/repositories';
import IssueOpen from './pages/issueOpen';
import IssueClosed from './pages/issueClosed';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  User: {
    screen: TabNavigator({
      IssueOpen: { screen: IssueOpen },
      IssueClosed: { screen: IssueClosed }
    }),
  },
}, {
  initialRouteName: 'Repositories',
});

export default Routes;
