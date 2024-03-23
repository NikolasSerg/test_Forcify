import { useState } from "react";
import { Col, Row } from "react-bootstrap"

import { useCardContext } from "context/index";
import { ModalComponent, CardsList, ICard, TitleBlock, Direction } from "components/index";
import { INewCard, TypeCard } from "types/index";
import { ActivityService } from "services/index";

import styles from "./MyCardsBlock.module.scss";
import 'global.scss';

const defaultState = {title: '', description: ''}

export const MyCardsBlock = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [card, setCard] = useState<INewCard | ICard>(defaultState)
    
    const {cardList, addNewCard, deleteCard, updateCard} = useCardContext()

    const handleOpenModal = (type: TypeCard, cardCurrent?: ICard) => {
        if(type === TypeCard.NEW_CARD) {
            ActivityService.getRandomActivity()
            .then((data) => {
                data && setCard({...card, title: data.activity})
                setIsOpenModal(true)
            })
            .catch((error) => {
                console.error(error)
            })
        }

        if(type === TypeCard.EDIT_CARD && cardCurrent) {
            setCard(cardCurrent)
            setIsOpenModal(true)
        }

        if(type === TypeCard.DELETE_CARD && cardCurrent) {
            deleteCard(cardCurrent.id)
        }

    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
        setCard(defaultState)
    }

    const handleSubmitModal = (card: INewCard | ICard) => {
        if('id' in card) {
            updateCard(card)
        } else {
            addNewCard(card)
        }
        setCard(defaultState)
    }

    return(
        <Col>
            <Row className="gap-5 position-relative">
                <TitleBlock point={'02'} header={'B&O Plan —'} title={'User Experience, User Interface'} direction={Direction.ROW_REVERS} />
            </Row>
        <div className={`${styles.containerBlock}`}>
            <Col>
                <Row>
                    <h1>My Cards</h1>
                </Row>
                <Row>
                    <CardsList cards={cardList} openModalCallback={handleOpenModal} />
                </Row>
                <ModalComponent 
                    isOpen={isOpenModal} 
                    openModalCallback={handleCloseModal}
                    handleCloseModal={handleCloseModal}
                    submitModalCallback={handleSubmitModal}
                    card={card}
                />
            </Col>
        </div>
        </Col>
    )
}