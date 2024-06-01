import styled from "styled-components";
import {RenderService} from "../../service/render/render.service";

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

export const Modal1 = ({info1, info2}: any) => {
    const renderService = RenderService.getInstance()

    return <Modal>
        <Container>
            <div>
                {info1}
            </div>
            <div>
                {info2}
            </div>
            <button onClick={() => renderService.remove()}>Fechar último</button>
            <button onClick={() => renderService.clear()}>Fechar todos</button>
            <button onClick={() => renderService.add({component: <Modal1 info1={info1} info2={info2}/>})}>Adicionar modal
            </button>
        </Container>
    </Modal>
}
