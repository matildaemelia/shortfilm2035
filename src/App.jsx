import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import StarsBackground from './components/StarsBackground';
import Start from './pages/Start';
import Friends from './pages/Friends';
import Location from './pages/Location';
import Simulation from './pages/Simulation';
import NotFound from './pages/NotFound';
import Activities from './pages/Activities';

export default function App() {
  const location = useLocation();

  return (
    <div className='relative min-h-screen text-white overflow-x-hidden'>
      <StarsBackground />
      <div className='relative z-10 flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0.6 }}
          className='w-full flex items-center justify-center'
          >
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Start />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/location' element={<Location />} />
              <Route path='/activities' element={<Activities />} />
              <Route path='/simulation' element={<Simulation />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}