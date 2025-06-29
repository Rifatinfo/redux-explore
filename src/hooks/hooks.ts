// hooks.ts or wherever you're defining custom hooks
import { useDispatch, useSelector, type TypedUseSelectorHook,  } from 'react-redux';
import type { AppDispatch, RootState } from '@/redux/store/store'; 


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
