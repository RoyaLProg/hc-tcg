import {useSelector} from 'react-redux'
import {getPlayerState} from 'logic/game/game-selectors'
import {CardT} from 'types/game-state'
import CardList from 'components/card-list'
import css from './discarded-cards.module.css'
import {useState} from 'react'

function discarded_cards() {
	const discarded: Array<CardT> = useSelector(getPlayerState)?.discarded || []
	const [showDiscardedCards, setShowDiscardedCard] = useState<boolean>(false)

	if (!showDiscardedCards) {
		return (
			<div className={css.wrapper}>
				<div className={css.discardedButton}>
					<button onClick={() => setShowDiscardedCard(true)}>
						Show Discarded Cards
					</button>
				</div>
			</div>
		)
	}
	return (
		<div className={css.wrapper}>
			<button
				className="closeButton"
				onClick={() => setShowDiscardedCard(false)}
			>
				{'X'}
			</button>
			<div className={css.cards}>
				<CardList size="small" cards={discarded} />
			</div>
		</div>
	)
}

export default discarded_cards
