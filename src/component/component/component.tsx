import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Modal2StateContext} from "../modal2/modal2.state";

export const Component = observer(() => {
    const context = useContext(Modal2StateContext)

    return <div>
        <div>Component {context.value}</div>
        <button onClick={() => context.value+=1}>aumentar</button>
        <button onClick={() => context.value-=1}>diminui</button>
    </div>
})
