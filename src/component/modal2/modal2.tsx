import styled from "styled-components";
import {RenderService} from "../../service/render/render.service";
import {Modal2State, Modal2StateContext} from "./modal2.state";
import {Component} from "../component/component";
import {observer} from "mobx-react-lite";
import {Component2} from "../component2/component2";

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
`

const Container = styled.div`
    width: 500px;
    height: 300px;
`

export const Modal2 = () => {
    const renderService = RenderService.getInstance()

    return <Modal2StateContext.Provider value={new Modal2State()}>
        <Modal>
            <Container>

                <Component />
                <Component2 />
                <button onClick={() => renderService.remove()}>Fechar</button>
            </Container>
        </Modal>
    </Modal2StateContext.Provider>
}
