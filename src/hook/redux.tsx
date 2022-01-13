import { AppDispatch, AppState } from "@redux/core";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchSelector,
  useSelector as useReduxSelector,
} from "react-redux";

const useDispatch = () => useDispatchSelector<AppDispatch>();
const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
export { useSelector, useDispatch };
