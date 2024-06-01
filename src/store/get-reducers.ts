import { Draft, PayloadAction } from '@reduxjs/toolkit';

type ReducerActions<T> = Required<{
  [P in keyof T]: (state: Draft<T>, action: PayloadAction<T[P]>) => void;
}> & {
  setState: (state: Draft<T>, action: PayloadAction<Partial<T>>) => void;
};

export type Actions<T> = Required<{
  [P in keyof T]: (state: T[P]) => any;
}> & {
  setState: (state: Partial<T>) => any;
};

export function getReducers<T extends Record<string, any>>(initialState: T) {
  const reducers: any = {};

  for (const key in initialState) {
    reducers[key] = (
      state: T,
      action: PayloadAction<T[Extract<keyof T, string>]>,
    ) => {
      state[key] = action.payload;
    };
  }

  reducers.setState = (state: T, action: PayloadAction<Partial<T>>) => {
    for (const key in action.payload) {
      if (
        initialState[key] !== undefined &&
        action.payload[key] === undefined
      ) {
        return;
      }

      if (action.payload.hasOwnProperty(key)) {
        state[key] = action.payload[key]!;
      }
    }
  };

  return reducers as ReducerActions<T>;
}
