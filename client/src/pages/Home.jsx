import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'
import { CustomButton } from '../components'

import state from '../store'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headContentAnimation}>
              <motion.h1 className="head-text" {...headTextAnimation}>
                NERDAPALOZA
                <br className="xl:block hidden" /> 2023 CHALLENGE.
              </motion.h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <motion.p
                className="max-w-md font-normal text-gray-600 text-base"
                {...headTextAnimation}
              >
                Create your unique and exclusive shirt for the Nerdapalooza 2023
                Challenge.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </motion.p>
              <CustomButton
                type="filled"
                title="Create your shirt"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home
