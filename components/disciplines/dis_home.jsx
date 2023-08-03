import React from 'react'
import Container 	from '../structure/container';
import Image from 'next/image'; 
import dis_css from '../../styles/sections/disciplines/disciplines.module.scss';
import cardsData from '../../content/index/discipline.json';
import Link from 'next/link';
import BG from '../blocks/hero.bg/bg-color-2'

export default function Dis_home() {
  return (
    <>
        <Container>
            <div className={dis_css.main_cont}>
				<h2 >DISCIPLINES OF GYMNASTICS GAME</h2>
                <div className={dis_css.card_cont}>
                    {cardsData.map((card, index) => (
                        <div key={card.id} className={dis_css.card}>
                            <img src={card.img} alt={`Card ${card.id}`} />
                            {/* <Image src={card.img} width={500} height={300} alt={`Card ${card.id}`} /> */}
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))} 
                </div>
            </div>
		</Container>
            <BG theme="bg-color-2" />
    </>
  )
}
