import React from "react";

export interface RenderState {
    elements: React.JSX.Element[]
}

export const initialState: RenderState = {
    elements: []
};
