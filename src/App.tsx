import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ConfigProvider} from 'antd';
import {ANT_THEME_CONFIG} from 'src/constants/configTheme.ts';
import {CommonLayout} from 'src/components/CommonLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <CommonLayout />
    </ConfigProvider>
  )
}

export default App
