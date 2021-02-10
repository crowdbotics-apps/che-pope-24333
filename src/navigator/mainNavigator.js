import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen25203269Navigator from '../features/CopyOfCopyOfBlankScreen25203269/navigator';
import CopyOfBlankScreen25203268Navigator from '../features/CopyOfBlankScreen25203268/navigator';
import BlankScreen25203267Navigator from '../features/BlankScreen25203267/navigator';
import BlankScreen24203266Navigator from '../features/BlankScreen24203266/navigator';
import CopyOfBlankScreen0203265Navigator from '../features/CopyOfBlankScreen0203265/navigator';
import CopyOfBlankScreen0203192Navigator from '../features/CopyOfBlankScreen0203192/navigator';
import CopyOfBlankScreen0203191Navigator from '../features/CopyOfBlankScreen0203191/navigator';
import CopyOfBlankScreen0203189Navigator from '../features/CopyOfBlankScreen0203189/navigator';
import CopyOfBlankScreen0203188Navigator from '../features/CopyOfBlankScreen0203188/navigator';
import CopyOfBlankScreen0203187Navigator from '../features/CopyOfBlankScreen0203187/navigator';
import CopyOfBlankScreen0203186Navigator from '../features/CopyOfBlankScreen0203186/navigator';
import CopyOfBlankScreen0203185Navigator from '../features/CopyOfBlankScreen0203185/navigator';
import CopyOfBlankScreen0203184Navigator from '../features/CopyOfBlankScreen0203184/navigator';
import CopyOfBlankScreen0203183Navigator from '../features/CopyOfBlankScreen0203183/navigator';
import CopyOfBlankScreen0203182Navigator from '../features/CopyOfBlankScreen0203182/navigator';
import CopyOfBlankScreen0203181Navigator from '../features/CopyOfBlankScreen0203181/navigator';
import CopyOfBlankScreen0203180Navigator from '../features/CopyOfBlankScreen0203180/navigator';
import CopyOfBlankScreen0203179Navigator from '../features/CopyOfBlankScreen0203179/navigator';
import CopyOfBlankScreen0203178Navigator from '../features/CopyOfBlankScreen0203178/navigator';
import CopyOfBlankScreen0203177Navigator from '../features/CopyOfBlankScreen0203177/navigator';
import CopyOfBlankScreen0203176Navigator from '../features/CopyOfBlankScreen0203176/navigator';
import CopyOfBlankScreen0203175Navigator from '../features/CopyOfBlankScreen0203175/navigator';
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
CopyOfCopyOfBlankScreen25203269: { screen: CopyOfCopyOfBlankScreen25203269Navigator },
CopyOfBlankScreen25203268: { screen: CopyOfBlankScreen25203268Navigator },
BlankScreen25203267: { screen: BlankScreen25203267Navigator },
BlankScreen24203266: { screen: BlankScreen24203266Navigator },
CopyOfBlankScreen0203265: { screen: CopyOfBlankScreen0203265Navigator },
CopyOfBlankScreen0203192: { screen: CopyOfBlankScreen0203192Navigator },
CopyOfBlankScreen0203191: { screen: CopyOfBlankScreen0203191Navigator },
CopyOfBlankScreen0203189: { screen: CopyOfBlankScreen0203189Navigator },
CopyOfBlankScreen0203188: { screen: CopyOfBlankScreen0203188Navigator },
CopyOfBlankScreen0203187: { screen: CopyOfBlankScreen0203187Navigator },
CopyOfBlankScreen0203186: { screen: CopyOfBlankScreen0203186Navigator },
CopyOfBlankScreen0203185: { screen: CopyOfBlankScreen0203185Navigator },
CopyOfBlankScreen0203184: { screen: CopyOfBlankScreen0203184Navigator },
CopyOfBlankScreen0203183: { screen: CopyOfBlankScreen0203183Navigator },
CopyOfBlankScreen0203182: { screen: CopyOfBlankScreen0203182Navigator },
CopyOfBlankScreen0203181: { screen: CopyOfBlankScreen0203181Navigator },
CopyOfBlankScreen0203180: { screen: CopyOfBlankScreen0203180Navigator },
CopyOfBlankScreen0203179: { screen: CopyOfBlankScreen0203179Navigator },
CopyOfBlankScreen0203178: { screen: CopyOfBlankScreen0203178Navigator },
CopyOfBlankScreen0203177: { screen: CopyOfBlankScreen0203177Navigator },
CopyOfBlankScreen0203176: { screen: CopyOfBlankScreen0203176Navigator },
CopyOfBlankScreen0203175: { screen: CopyOfBlankScreen0203175Navigator },
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
