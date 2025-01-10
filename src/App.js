import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import CardFlipMemory from './components/CardFlipMemory'
import EmojiGame from './components/EmojiGame'
import RockPaperScissor from './components/RockPaperScissor'
import MemoryMatrix from './components/MemoryMatrix'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji-game" component={EmojiGame} />
    <Route exact path="/card-flip-memory-game" component={CardFlipMemory} />
    <Route exact path="/rock-paper-scissor" component={RockPaperScissor} />
    <Route exact path="/memory-matrix" component={MemoryMatrix} />
  </Switch>
)

export default App
