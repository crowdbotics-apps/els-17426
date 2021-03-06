import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList53436Navigator from '../features/ArticleList53436/navigator';
import ArticleList53435Navigator from '../features/ArticleList53435/navigator';
import ArticleList53434Navigator from '../features/ArticleList53434/navigator';
import ArticleList53417Navigator from '../features/ArticleList53417/navigator';
import ArticleList53416Navigator from '../features/ArticleList53416/navigator';
import ArticleList53415Navigator from '../features/ArticleList53415/navigator';
import ArticleList53383Navigator from '../features/ArticleList53383/navigator';
import ArticleList53382Navigator from '../features/ArticleList53382/navigator';
import ArticleList53381Navigator from '../features/ArticleList53381/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList53436: { screen: ArticleList53436Navigator },
ArticleList53435: { screen: ArticleList53435Navigator },
ArticleList53434: { screen: ArticleList53434Navigator },
ArticleList53417: { screen: ArticleList53417Navigator },
ArticleList53416: { screen: ArticleList53416Navigator },
ArticleList53415: { screen: ArticleList53415Navigator },
ArticleList53383: { screen: ArticleList53383Navigator },
ArticleList53382: { screen: ArticleList53382Navigator },
ArticleList53381: { screen: ArticleList53381Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
