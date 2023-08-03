import BG from '../blocks/hero.bg/bg-color-2'
import Container from '../structure/container'
import React from 'react'

export default function hero_gym() {
  return (
    <div>
        <Container>
				<h2 className="fullHeight centered">Coming Soon!</h2>
				<style jsx>{`
				.fullHeight {
					min-height: 500px;
					height: 100vh;
					max-height: 1200px;
				}
				.centered {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
			</Container>
            <BG theme='bg-color-2'/>
    </div>
  )
}
