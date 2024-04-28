import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamState {
    teamName: string;
}

const initialState: TeamState = {
    teamName: "",
}

const teamStateSlice = createSlice({
    name: "teamState",
    initialState,
    reducers: {
        setTeamName(state, action: PayloadAction<string>) {
            state.teamName = action.payload;
        }
    }
})

export const { setTeamName } = teamStateSlice.actions
export default teamStateSlice.reducer