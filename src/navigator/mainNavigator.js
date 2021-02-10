import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen0203174Navigator from '../features/CopyOfBlankScreen0203174/navigator';
import CopyOfBlankScreen0203173Navigator from '../features/CopyOfBlankScreen0203173/navigator';
import CopyOfBlankScreen0203172Navigator from '../features/CopyOfBlankScreen0203172/navigator';
import CopyOfBlankScreen0203171Navigator from '../features/CopyOfBlankScreen0203171/navigator';
import BlankScreen0203170Navigator from '../features/BlankScreen0203170/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen0203174: { screen: CopyOfBlankScreen0203174Navigator },
CopyOfBlankScreen0203173: { screen: CopyOfBlankScreen0203173Navigator },
CopyOfBlankScreen0203172: { screen: CopyOfBlankScreen0203172Navigator },
CopyOfBlankScreen0203171: { screen: CopyOfBlankScreen0203171Navigator },
BlankScreen0203170: { screen: BlankScreen0203170Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
