import * as React from 'react';

import AppStack from './src/navigation/stacks/AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppStack />
    </SafeAreaProvider>
  );
};

export default App;
