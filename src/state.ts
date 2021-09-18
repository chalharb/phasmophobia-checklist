import { createGlobalState } from 'react-hooks-global-state';
import {GHOSTS} from './constants'
import {Evidence} from './models'

export const { useGlobalState } = createGlobalState({
    ghosts: GHOSTS.data,
    filters: Evidence,
});